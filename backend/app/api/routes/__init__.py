from app.api.routes.auth import router as auth_router
from app.api.routes.profile import router as profile_router
from app.api.routes.pathways import router as pathways_router

__all__ = ["auth_router", "profile_router", "pathways_router"]

