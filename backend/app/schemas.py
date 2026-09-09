from pydantic import BaseModel, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime

# --- User Schemas ---
class UserBase(BaseModel):
    name: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# --- Profile Schemas ---
class ProfileBase(BaseModel):
    state: str
    business_category: str
    business_stage: str
    business_type: str
    annual_turnover: str
    business_goal: str
    gender: Optional[str] = None
    social_category: Optional[str] = None
    disability_status: Optional[bool] = False

class ProfileCreate(ProfileBase):
    pass

class ProfileResponse(ProfileBase):
    id: int
    user_id: int
    
    class Config:
        from_attributes = True

# --- Scheme Schemas ---
class SchemeBase(BaseModel):
    id: str
    name: str
    department: str
    description: str
    category: str
    target_group: str
    states: List[str]
    benefits: Dict[str, Any]
    eligibility: Dict[str, Any]
    documents: List[str]
    application_url: Optional[str] = None
    source_url: Optional[str] = None
    last_updated: datetime

class SchemeResponse(SchemeBase):
    class Config:
        from_attributes = True

class SchemeMatchResponse(SchemeResponse):
    match_score: float
    match_reasons: List[str]
    eligibility_status: str
    eligibility_explanation: str
