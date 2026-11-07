"""
WAYZA Dashboard Schemas & Architectural Stubs
Database entity blueprints prepared for the three interconnected dashboards:
1. Placement Dashboard
2. Higher Studies Dashboard
3. Government Exams Dashboard
"""
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text, Float
from sqlalchemy.orm import relationship
from app.database import Base

# ==============================================================================
# 1. PLACEMENT DASHBOARD MODELS (Prepared for future module)
# ==============================================================================
class PlacementProfile(Base):
    """Placement Module: tracks job preferences, resume, status, and target roles."""
    __tablename__ = "module_placement_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    resume_headline = Column(String(255), nullable=True)
    resume_url = Column(String(500), nullable=True)
    primary_skills = Column(Text, default="[]")              # JSON array of technical/functional skills
    preferred_roles = Column(Text, default="[]")             # e.g., Software Engineer, Product Analyst
    expected_ctc_lpa = Column(Float, nullable=True)          # in LPA
    placement_status = Column(String(50), default="Seeking") # Seeking, Placed, Exploring Internships
    campus_eligible = Column(Boolean, default=True)
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


# ==============================================================================
# 2. HIGHER STUDIES DASHBOARD MODELS (Prepared for future module)
# ==============================================================================
class HigherStudiesProfile(Base):
    """Higher Studies Module: tracks graduate studies, test scores, target universities."""
    __tablename__ = "module_higher_studies_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    target_degree = Column(String(100), nullable=True)        # MS, M.Tech, MBA, PhD
    target_countries = Column(Text, default="[]")             # USA, Germany, UK, Canada, India
    target_specialization = Column(String(255), nullable=True)
    gre_score = Column(Integer, nullable=True)
    toefl_ielts_score = Column(Float, nullable=True)
    target_intake_year = Column(Integer, nullable=True)       # e.g. 2026, 2027
    shortlisted_universities_count = Column(Integer, default=0)
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


# ==============================================================================
# 3. GOVERNMENT EXAMS DASHBOARD MODELS (Prepared for future module)
# ==============================================================================
class GovtExamProfile(Base):
    """Government Exams Module: tracks eligibility, age limits, syllabus, and notifications."""
    __tablename__ = "module_govt_exam_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    exam_categories = Column(Text, default="[]")              # UPSC, SSC, Banking (IBPS/SBI), Railways, Defense
    reservation_category = Column(String(50), default="General") # General, OBC, SC, ST, EWS
    age_years = Column(Integer, nullable=True)
    domicile_state = Column(String(100), nullable=True)
    attempt_count = Column(Integer, default=0)
    tracked_notifications_count = Column(Integer, default=0)
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

