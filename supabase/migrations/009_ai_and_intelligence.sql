-- ==========================================
-- 009. AI & INTELLIGENCE
-- ==========================================

CREATE TABLE public.embeddings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    entity_type TEXT NOT NULL, -- e.g., 'BUSINESS', 'OPPORTUNITY'
    entity_id UUID NOT NULL,
    embedding vector(1536),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.recommendations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    target_business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
    recommended_entity_type TEXT NOT NULL, -- e.g., 'SCHEME', 'BUSINESS'
    recommended_entity_id UUID NOT NULL,
    score DECIMAL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.recommendation_events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    recommendation_id UUID REFERENCES public.recommendations(id) ON DELETE CASCADE,
    actor_id UUID REFERENCES public.profiles(id),
    event_type TEXT NOT NULL, -- e.g., 'IMPRESSION', 'CLICK', 'APPLY'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
