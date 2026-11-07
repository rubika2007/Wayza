import json
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.api.deps import get_db, get_current_user
from app.models.user import User, UserProfile
from app.schemas.profile import UserProfileResponse, UserProfileUpdateRequest

router = APIRouter(prefix="/profile", tags=["User Profile"])

@router.get("", response_model=UserProfileResponse)
def get_user_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Retrieve the current user's complete profile information.
    """
    profile = db.query(UserProfile).filter(UserProfile.user_id == current_user.id).first()
    if not profile:
        # Create if not exists
        profile = UserProfile(user_id=current_user.id, career_interests_raw="[]")
        db.add(profile)
        db.commit()
        db.refresh(profile)
        
    return UserProfileResponse(
        id=profile.id,
        user_id=current_user.id,
        full_name=current_user.full_name,
        email=current_user.email,
        dob=profile.dob,
        qualification=profile.qualification,
        degree=profile.degree,
        branch=profile.branch,
        graduation_year=profile.graduation_year,
        location=profile.location,
        career_interests=profile.career_interests,
        bio=profile.bio,
        is_profile_complete=current_user.is_profile_complete
    )

@router.put("", response_model=UserProfileResponse)
def update_user_profile(
    update_data: UserProfileUpdateRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Update the current user's profile information.
    Can be called during initial onboarding or anytime later from Profile settings.
    """
    profile = db.query(UserProfile).filter(UserProfile.user_id == current_user.id).first()
    if not profile:
        profile = UserProfile(user_id=current_user.id)
        db.add(profile)
        
    # Update full_name on User model if provided
    if update_data.full_name is not None and update_data.full_name.strip():
        current_user.full_name = update_data.full_name.strip()
        
    # Update profile fields
    if update_data.dob is not None:
        profile.dob = update_data.dob.strip() if update_data.dob else None
    if update_data.qualification is not None:
        profile.qualification = update_data.qualification.strip() if update_data.qualification else None
    if update_data.degree is not None:
        profile.degree = update_data.degree.strip() if update_data.degree else None
    if update_data.branch is not None:
        profile.branch = update_data.branch.strip() if update_data.branch else None
    if update_data.graduation_year is not None:
        profile.graduation_year = update_data.graduation_year
    if update_data.location is not None:
        profile.location = update_data.location.strip() if update_data.location else None
    if update_data.career_interests is not None:
        profile.career_interests = update_data.career_interests
    if update_data.bio is not None:
        profile.bio = update_data.bio.strip() if update_data.bio else None

    # Check completeness
    is_complete = bool(
        profile.qualification and
        profile.degree and
        profile.branch and
        profile.graduation_year and
        profile.location and
        len(profile.career_interests) > 0
    )
    current_user.is_profile_complete = is_complete

    db.commit()
    db.refresh(profile)
    db.refresh(current_user)

    return UserProfileResponse(
        id=profile.id,
        user_id=current_user.id,
        full_name=current_user.full_name,
        email=current_user.email,
        dob=profile.dob,
        qualification=profile.qualification,
        degree=profile.degree,
        branch=profile.branch,
        graduation_year=profile.graduation_year,
        location=profile.location,
        career_interests=profile.career_interests,
        bio=profile.bio,
        is_profile_complete=current_user.is_profile_complete
    )

