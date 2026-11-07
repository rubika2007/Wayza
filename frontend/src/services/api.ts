const API_BASE = '/api';

interface RequestOptions extends RequestInit {
  data?: any;
}

export async function apiRequest<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { data, headers: customHeaders, ...customOptions } = options;
  const token = localStorage.getItem('wayza_token');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(customHeaders as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...customOptions,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`;

  let response: Response;
  try {
    response = await fetch(url, config);
  } catch (err: any) {
    throw new Error('Unable to connect to the WAYZA backend server. Please check your network or server status.');
  }

  // Handle unauthorized / expired session
  if (response.status === 401 && !endpoint.includes('/auth/login') && !endpoint.includes('/auth/register')) {
    localStorage.removeItem('wayza_token');
    localStorage.removeItem('wayza_user');
    window.dispatchEvent(new Event('wayza_auth_expired'));
  }

  let responseData: any;
  try {
    responseData = await response.json();
  } catch {
    responseData = null;
  }

  if (!response.ok) {
    let errorMsg = 'An unexpected error occurred. Please try again.';
    if (responseData) {
      if (typeof responseData.detail === 'string') {
        errorMsg = responseData.detail;
      } else if (Array.isArray(responseData.detail)) {
        errorMsg = responseData.detail.map((d: any) => d.msg || JSON.stringify(d)).join(', ');
      } else if (responseData.message) {
        errorMsg = responseData.message;
      }
    }
    throw new Error(errorMsg);
  }

  return responseData as T;
}

