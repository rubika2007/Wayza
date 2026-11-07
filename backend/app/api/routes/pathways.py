from typing import List
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/pathways", tags=["Career Pathways"])

class PathwayInfo(BaseModel):
    id: str
    key: str
    title: str
    short_description: str
    detailed_description: str
    target_audience: str
    features: List[str]
    route: str
    accent_color: str
    icon_name: str
    badge_label: str
    status: str

@router.get("", response_model=List[PathwayInfo])
def get_career_pathways():
    """
    Returns metadata for the three unified career pathways on WAYZA:
    1. Placement
    2. Higher Studies
    3. Government Exams
    """
    return [
        PathwayInfo(
            id="1",
            key="placement",
            title="Placement",
            short_description="Find jobs, internships and company opportunities.",
            detailed_description="Comprehensive job discovery and placement ecosystem connecting you with leading tech firms, corporate giants, high-growth startups, and internships.",
            target_audience="Final year students, fresh graduates, and working professionals seeking career advancement.",
            features=[
                "Curated on-campus and off-campus corporate jobs",
                "Verified summer & pre-placement internships",
                "Skill benchmark match score for target companies",
                "Application tracking & interview guidance"
            ],
            route="/placement",
            accent_color="blue",
            icon_name="Briefcase",
            badge_label="Corporate & Tech",
            status="Architecturally Ready"
        ),
        PathwayInfo(
            id="2",
            key="higher_studies",
            title="Higher Studies",
            short_description="Explore universities, postgraduate courses and scholarships.",
            detailed_description="Explore global master's, doctoral programs, specialized post-graduate diplomas, and prestigious academic fellowships worldwide.",
            target_audience="Aspirants targeting MS, M.Tech, MBA, PhD, and research fellowships globally.",
            features=[
                "Global university & master's program directory",
                "Scholarship, stipend & fellowship tracker",
                "GRE, GMAT, CAT & GATE score profile mapping",
                "Admission timelines & document checklists"
            ],
            route="/higher-studies",
            accent_color="purple",
            icon_name="GraduationCap",
            badge_label="Global Academia",
            status="Architecturally Ready"
        ),
        PathwayInfo(
            id="3",
            key="government_exams",
            title="Government Exams",
            short_description="Discover government examinations and check eligibility.",
            detailed_description="Navigate civil services, public sector undertakings, defense, banking, and state PSC examinations with instant automated eligibility checks.",
            target_audience="Candidates targeting Central, State, Banking, Defense, and PSU government careers.",
            features=[
                "Instant eligibility check based on degree, age & domicile",
                "Live official notification & admit card alerts",
                "Detailed syllabus & previous year paper repository",
                "Upcoming examination calendar & application deadlines"
            ],
            route="/government-exams",
            accent_color="emerald",
            icon_name="Award",
            badge_label="Public Sector",
            status="Architecturally Ready"
        )
    ]

