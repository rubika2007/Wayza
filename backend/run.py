"""
WAYZA Backend Launcher
Usage:
    python run.py
"""
import uvicorn
from app.config import settings

if __name__ == "__main__":
    print("=" * 60)
    print("  WAYZA – Unified Career Opportunity Platform")
    print("  Tagline: 'Your Next Step Starts Here.'")
    print("=" * 60)
    print("Starting FastAPI backend on http://127.0.0.1:8000 ...")
    print("Interactive Swagger API Documentation: http://127.0.0.1:8000/docs")
    print("=" * 60)
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)

