-- ==========================================
-- 004. OPPORTUNITY ENGINE
-- ==========================================

CREATE TABLE public.opportunities (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
    created_by UUID REFERENCES public.profiles(id),
    type opportunity_type NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT DEFAULT 'OPEN',
    industry_id UUID REFERENCES public.industries(id),
    category_id UUID,
    budget_min DECIMAL,
    budget_max DECIMAL,
    currency TEXT DEFAULT 'INR',
    quantity DECIMAL,
    quantity_unit TEXT,
    location geometry(POINT, 4326),
    radius_km DECIMAL,
    urgency TEXT,
    deadline TIMESTAMP WITH TIME ZONE,
    visibility TEXT DEFAULT 'PUBLIC',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE public.opportunity_matches (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    opportunity_id UUID REFERENCES public.opportunities(id) ON DELETE CASCADE,
    matched_business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
    matched_user_id UUID REFERENCES public.profiles(id),
    match_score DECIMAL,
    match_reason TEXT,
    match_status match_status DEFAULT 'RECOMMENDED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(opportunity_id, matched_business_id)
);

CREATE TABLE public.opportunity_actions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    opportunity_match_id UUID REFERENCES public.opportunity_matches(id) ON DELETE CASCADE,
    actor_user_id UUID REFERENCES public.profiles(id),
    action_type TEXT NOT NULL, -- e.g., 'CONTACT_INITIATED', 'DISMISSED'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
