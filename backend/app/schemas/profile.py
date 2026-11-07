from typing import List, Optional
from pydantic import BaseModel, Field

class UserProfileUpdateRequest(BaseModel):
    full_name: Optional[str] = Field(None, min_length=2, max_length=100)
    dob: Optional[str] = Field(None, description="Date of birth in YYYY-MM-DD or readable format")
    qualification: Optional[str] = Field(None, description="e.g. B.Tech, M.Tech, MBA, Diploma, Higher Secondary")
    degree: Optional[str] = Field(None, description="e.g. Bachelor of Technology, Bachelor of Science")
    branch: Optional[str] = Field(None, description="e.g. Computer Science, Electronics, Mechanical")
    graduation_year: Optional[int] = Field(None, ge=1970, le=2040, description="Year of graduation")
    location: Optional[str] = Field(None, description="City, State, or Country")
    career_interests: Optional[List[str]] = Field(default=[], description="Selected career pathways and focus areas")
    bio: Optional[str] = Field(None, description="Brief professional or academic summary")


class UserProfileResponse(BaseModel):
    id: int
    user_id: int
    full_name: str
    email: str
    dob: Optional[str] = None
    qualification: Optional[str] = None
    degree: Optional[str] = None
    branch: Optional[str] = None
    graduation_year: Optional[int] = None
    location: Optional[str] = None
    career_interests: List[str] = []
    bio: Optional[str] = None
    is_profile_complete: bool = False

    class Config:
        from_attributes = True

