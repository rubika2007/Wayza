import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.config import settings

logger = logging.getLogger("wayza.database")
logging.basicConfig(level=logging.INFO)

db_url = settings.DATABASE_URL

if db_url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}
    engine = create_engine(db_url, connect_args=connect_args)
    logger.info(f"Connected to Database: {db_url}")
else:
    # PostgreSQL connection
    engine = create_engine(db_url, pool_pre_ping=True)
    logger.info(f"Connected to PostgreSQL Database: {db_url}")

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    """Dependency for providing database session to FastAPI route handlers."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
