# VyapaarAI

**Tagline:** *Build. Connect. Finance. Grow.*

## Project Overview
VyapaarAI is an AI-powered digital network where entrepreneurs and businesses can build their identity, discover customers and partners, access financing and government schemes, communicate, and discover business opportunities personalized to their needs.

## Features
- **AI Scheme Matching:** Find eligible government schemes based on your profile.
- **Eligibility Rule Engine:** Deterministic rule engine to ensure accurate eligibility status.
- **Semantic Search:** Search using natural language for schemes and opportunities.
- **Opportunity Connect:** Connect with relevant entrepreneurs, buyers, suppliers, and investors.
- **Smart Post Reach:** AI-driven feed ranking based on business intent and relevance.
- **Voice Input:** Speak your requirements for ease of use.
- **Multilingual Support:** Accessible UI in multiple Indian languages.
- **Admin Dashboard:** Manage schemes, users, and opportunities.

## Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** FastAPI, Python 3.12+
- **Database:** PostgreSQL 16+ with pgvector
- **Cache:** Redis
- **AI/ML:** sentence-transformers, Python

## Architecture
Clean Monorepo Architecture:
- `/frontend` - Next.js UI Application
- `/backend` - FastAPI application serving API routes
- `/ai` - AI/ML semantic matching and NLP processing
- `/database` - Database migration scripts and initializations
- `/docs` - Project documentation

## Installation

### Prerequisites
- Node.js (v20+)
- Python (v3.12+)
- PostgreSQL (v16+) with pgvector extension enabled
- Redis

### Environment Setup
1. Copy `backend/.env.example` to `backend/.env`
2. Update the environment variables in `.env` with your local DB credentials.

### Database Setup
Ensure PostgreSQL is running and `vyapaarai` database is created with `pgvector` enabled:
```sql
CREATE DATABASE vyapaarai;
\c vyapaarai
CREATE EXTENSION vector;
```

### Running the Backend
```bash
cd backend
python -m venv venv
# Activate venv: .\venv\Scripts\activate (Windows) or source venv/bin/activate (Mac/Linux)
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```

### Running Redis
Start your local redis server.
```bash
redis-server
```

## Demo Credentials
(To be added for SIH presentation)

## Future Improvements
- B2B Marketplace Integration
- Direct Financing Integration
- Live Chat and Video Calling
