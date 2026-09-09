from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import models, schemas, database

router = APIRouter(
    prefix="/api/schemes",
    tags=["schemes"]
)

@router.get("/", response_model=list[schemas.SchemeResponse])
def get_schemes(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    schemes = db.query(models.Scheme).offset(skip).limit(limit).all()
    return schemes

@router.get("/{scheme_id}", response_model=schemas.SchemeResponse)
def get_scheme(scheme_id: str, db: Session = Depends(database.get_db)):
    scheme = db.query(models.Scheme).filter(models.Scheme.id == scheme_id).first()
    if not scheme:
        raise HTTPException(status_code=404, detail="Scheme not found")
    return scheme
