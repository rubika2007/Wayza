# WAYZA – Unified Career Opportunity Platform

> **Brand Name:** WAYZA  
> **Tagline:** Your Next Step Starts Here.

WAYZA is a unified career opportunity platform engineered to help students, graduates, job seekers, and working professionals discover and evaluate three interconnected career pathways:

1. **Placement Dashboard** — Find jobs, internships and company opportunities.
2. **Higher Studies Dashboard** — Explore universities, postgraduate courses and scholarships.
3. **Government Exams Dashboard** — Discover government examinations and check eligibility.

---

## 1. Technology Stack

- **Frontend:** React 18, TypeScript, Vite, React Router v6, Lucide Icons
- **Styling:** Tailwind CSS (modern SaaS dark palette, glassmorphism, responsive)
- **Backend:** Python 3.10+, FastAPI, Uvicorn, Pydantic v2
- **Database:** PostgreSQL (with automatic zero-config SQLite fallback for instant local execution)
- **ORM:** SQLAlchemy 2.0
- **Authentication:** Secure Session & JWT authentication (RFC 7519 HS256 tokens, PBKDF2-SHA256 password hashing)

---

## 2. Architecture & Folder Structure

The project strictly separates backend and frontend and prepares independent modular directories for future dashboard integration while sharing a common authentication system and user profile:

```text
Wayza1/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                     # FastAPI application entrypoint & CORS config
│   │   ├── config.py                   # Pydantic BaseSettings for env vars & DB URLs
│   │   ├── database.py                 # SQLAlchemy engine, session maker & declarative base
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   └── security.py             # PBKDF2 password hashing & HMAC-SHA256 JWT tokens
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py                 # User & UserProfile database tables
│   │   │   └── dashboard_schemas.py    # Schema definitions for future 3 modules
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py                 # UserRegister, UserLogin, TokenResponse, UserResponse
│   │   │   └── profile.py              # UserProfileSchema, UserProfileUpdateRequest
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── deps.py                 # get_db, get_current_user dependencies
│   │   │   └── routes/
│   │   │       ├── __init__.py
│   │   │       ├── auth.py             # /api/auth/register, /api/auth/login, /api/auth/me
│   │   │       ├── profile.py          # /api/profile (GET & PUT)
│   │   │       └── pathways.py         # /api/pathways (Pathways metadata & access status)
│   │   └── modules/                    # Independent modules prepared for future dashboards
│   │       ├── placement/              # Placement module backend folder
│   │       │   └── __init__.py
│   │       ├── higher_studies/         # Higher Studies module backend folder
│   │       │   └── __init__.py
│   │       └── government_exams/       # Government Exams module backend folder
│   │           └── __init__.py
│   ├── .env.example
│   ├── .env
│   ├── requirements.txt
│   └── run.py                          # Local server launcher
├── frontend/
│   ├── src/
│   │   ├── assets/                     # Brand graphics and icons
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── ProtectedRoute.tsx  # Guard requiring auth
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx          # Main navigation with auth state & WAYZA branding
│   │   │   │   └── Footer.tsx          # Clean footer with tagline & links
│   │   │   └── ui/
│   │   │       ├── BrandLogo.tsx       # Memorable WAYZA logo treatment + tagline
│   │   │       ├── Button.tsx          # Reusable button with variants & loading state
│   │   │       ├── Input.tsx           # Reusable input with validation & icons
│   │   │       └── Card.tsx            # Modern glassmorphism card
│   │   ├── context/
│   │   │   └── AuthContext.tsx         # Unified authentication state & token persistence
│   │   ├── features/                   # Independent feature folders for future dashboards
│   │   │   ├── placement/
│   │   │   │   └── PlacementDashboard.tsx       # Pathway entry preview & readiness
│   │   │   ├── higher-studies/
│   │   │   │   └── HigherStudiesDashboard.tsx   # Pathway entry preview & readiness
│   │   │   └── government-exams/
│   │   │       └── GovernmentExamsDashboard.tsx # Pathway entry preview & readiness
│   │   ├── pages/
│   │   │   ├── LandingPage.tsx         # Modern landing page with hero & 3 pathway cards
│   │   │   ├── RegisterPage.tsx        # Registration with validation
│   │   │   ├── LoginPage.tsx           # Login page with error handling
│   │   │   ├── ProfilePage.tsx         # User Profile Setup & Update
│   │   │   └── DashboardHubPage.tsx    # 3-Card Dashboard Selection Hub
│   │   ├── services/
│   │   │   ├── api.ts                  # Axios / Fetch client with auth headers
│   │   │   ├── authService.ts          # Auth endpoints
│   │   │   └── profileService.ts       # Profile endpoints
│   │   ├── types/
│   │   │   └── index.ts                # TypeScript types & interfaces
│   │   ├── App.tsx                     # React Router routes setup
│   │   ├── main.tsx                    # Vite entry
│   │   └── index.css                   # Tailwind CSS styling & custom utilities
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
└── README.md
```

---

## 3. Required Pages Implemented

1. **Landing Page (`/`)**:
   - WAYZA brand mark & typography
   - Tagline: *"Your Next Step Starts Here."*
   - Short introduction highlighting the unified opportunity gateway
   - Three attractive cards for Placement, Higher Studies, and Government Exams
   - Register and Login action buttons & simple navigation

2. **Registration Page (`/register`)**:
   - Full Name, Email, Password, Confirm Password
   - Form validation & secure PBKDF2 password hashing
   - Seamless onboarding transition to Profile Setup

3. **Login Page (`/login`)**:
   - Email, Password, login button, and inline error feedback
   - "Fill Demo Account" helper for rapid testing

4. **User Profile Setup & Management Page (`/profile`)**:
   - Full Name, Date of Birth, Qualification, Degree and Branch, Graduation Year, Location
   - Interactive multi-select Career Interests selector
   - Profile completeness score indicator
   - Allows users to update their profile at any time

5. **Main Dashboard Selection Page (`/dashboard`)**:
   - Welcome greeting displaying the user's name and academic summary
   - Three clearly organized dashboard cards:
     - **1. Placement:** *"Find jobs, internships and company opportunities."* (Button: Enter Placement Dashboard)
     - **2. Higher Studies:** *"Explore universities, postgraduate courses and scholarships."* (Button: Enter Higher Studies Dashboard)
     - **3. Government Exams:** *"Discover government examinations and check eligibility."* (Button: Enter Government Exams Dashboard)
   - Universal Access Policy: Every user can access all 3 dashboards regardless of campus placement cell eligibility.

---

## 4. Setup and Execution Instructions

### Prerequisites
- Python 3.10 or higher
- Node.js 18 or higher & npm

---

### Step 1: Backend Setup

1. Open a terminal in the project directory:
   ```bash
   cd backend
   ```

2. (Optional) Create and activate a virtual environment:
   ```bash
   # Windows:
   python -m venv venv
   .\venv\Scripts\activate

   # Linux/macOS:
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure the environment:
   The backend comes with a default `.env` configured to use SQLite (`sqlite:///./wayza.db`) for immediate zero-configuration local execution.
   
   If you wish to connect to PostgreSQL:
   - Open `backend/.env`
   - Set `DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<dbname>`

5. Start the FastAPI backend server:
   ```bash
   python run.py
   ```
   Or via uvicorn directly:
   ```bash
   uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
   ```
   - **Backend API:** `http://127.0.0.1:8000`
   - **Swagger Interactive API Docs:** `http://127.0.0.1:8000/docs`

---

### Step 2: Frontend Setup

1. Open a new terminal in the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 5. Default Demo Credentials

For quick evaluation, you can register a new account or sign in with:
- **Email:** `aarav@example.com`
- **Password:** `SecurePassword123!`

---

## 6. API Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth/register` | POST | Register new user with validation & hash password |
| `/api/auth/login` | POST | Authenticate user & issue JWT bearer token |
| `/api/auth/me` | GET | Retrieve authenticated user account |
| `/api/profile` | GET | Retrieve user profile & career interests |
| `/api/profile` | PUT | Update user profile & qualifications |
| `/api/pathways` | GET | Metadata for Placement, Higher Studies & Govt Exams |
| `/api/health` | GET | Health check status |

