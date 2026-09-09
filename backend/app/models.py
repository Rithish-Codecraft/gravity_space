from sqlalchemy import Column, Integer, String, Boolean, JSON, ForeignKey, DateTime, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from pgvector.sqlalchemy import Vector
from .database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    profile = relationship("Profile", back_populates="owner", uselist=False)

class Profile(Base):
    __tablename__ = "profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    state = Column(String)
    business_category = Column(String)
    business_stage = Column(String)
    business_type = Column(String)
    annual_turnover = Column(String)
    business_goal = Column(String)
    gender = Column(String, nullable=True)
    social_category = Column(String, nullable=True)
    disability_status = Column(Boolean, default=False)
    
    owner = relationship("User", back_populates="profile")

class Scheme(Base):
    __tablename__ = "schemes"
    
    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    department = Column(String)
    description = Column(String)
    category = Column(String)
    target_group = Column(String)
    states = Column(JSON)
    benefits = Column(JSON)
    eligibility = Column(JSON)
    documents = Column(JSON)
    application_url = Column(String, nullable=True)
    source_url = Column(String, nullable=True)
    last_updated = Column(DateTime(timezone=True))
    rules = Column(JSON) # JSON format for the rule engine
    embedding = Column(Vector(384), nullable=True) # Assuming 384 dimensions for all-MiniLM-L6-v2
