from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import engine, Base
# Import all models so Base.metadata knows about them
from app.models import User, UserProfile, PlacementProfile, HigherStudiesProfile, GovtExamProfile
from app.api.routes import auth_router, profile_router, pathways_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create all database tables automatically on startup
    Base.metadata.create_all(bind=engine)
    yield

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Unified career opportunity platform connecting students, graduates, and professionals with Placement, Higher Studies, and Government Exams.",
    version="1.0.0",
    lifespan=lifespan
)

# CORS Middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS + ["*"],  # Allow configured origins and dev clients
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount API routers
app.include_router(auth_router, prefix="/api")
app.include_router(profile_router, prefix="/api")
app.include_router(pathways_router, prefix="/api")

@app.get("/")
def read_root():
    return {
        "brand": "WAYZA",
        "tagline": settings.TAGLINE,
        "platform": "Unified Career Opportunity Platform",
        "version": "1.0.0",
        "documentation": "/docs",
        "pathways": [
            "1. Placement (Jobs, Internships & Corporate Opportunities)",
            "2. Higher Studies (Universities, Postgraduate Courses & Scholarships)",
            "3. Government Exams (Examinations & Eligibility Engine)"
        ],
        "status": "operational"
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "WAYZA API Core",
        "brand": "WAYZA",
        "tagline": settings.TAGLINE
    }

