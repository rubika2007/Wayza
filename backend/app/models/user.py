import json
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    is_profile_complete = Column(Boolean, default=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    # Relationship to user profile
    profile = relationship("UserProfile", back_populates="user", uselist=False, cascade="all, delete-orphan")

    def __repr__(self):
        return f"<User id={self.id} email='{self.email}'>"


class UserProfile(Base):
    __tablename__ = "user_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    # Profile details as specified
    dob = Column(String(50), nullable=True)                      # Date of Birth (YYYY-MM-DD or formatted)
    qualification = Column(String(150), nullable=True)            # e.g., Undergraduate, Postgraduate, Diploma
    degree = Column(String(150), nullable=True)                   # e.g., B.Tech, B.Sc, B.Com, MBA
    branch = Column(String(150), nullable=True)                   # e.g., Computer Science, Mechanical, Finance
    graduation_year = Column(Integer, nullable=True)              # e.g., 2025
    location = Column(String(255), nullable=True)                 # e.g., Bengaluru, Karnataka, India
    career_interests_raw = Column(Text, default="[]")             # Stored as JSON list of tags
    bio = Column(Text, nullable=True)                             # Brief bio / aspiration summary
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    # Relationship to user
    user = relationship("User", back_populates="profile")

    @property
    def career_interests(self):
        try:
            return json.loads(self.career_interests_raw or "[]")
        except Exception:
            return []

    @career_interests.setter
    def career_interests(self, value):
        if isinstance(value, list):
            self.career_interests_raw = json.dumps(value)
        elif isinstance(value, str):
            self.career_interests_raw = json.dumps([v.strip() for v in value.split(",") if v.strip()])
        else:
            self.career_interests_raw = "[]"

    def __repr__(self):
        return f"<UserProfile id={self.id} user_id={self.user_id}>"

