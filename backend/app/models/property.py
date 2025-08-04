from pydantic import BaseModel, HttpUrl
from typing import List, Optional
from uuid import UUID

class PropertyBase(BaseModel):
    title: str
    location: str
    price: float
    is_featured: bool = False
    property_type_id: UUID

class Property(PropertyBase):
    id: UUID
    image_urls: List[HttpUrl]
    description: Optional[str] = None
    bedrooms: Optional[int] = None
    bathrooms: Optional[int] = None
    area_sqm: Optional[int] = None

    class Config:
        # Esta configuração foi renomeada em Pydantic v2
        from_attributes = True