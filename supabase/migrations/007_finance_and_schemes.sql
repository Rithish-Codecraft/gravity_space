-- ==========================================
-- 007. FINANCE & SCHEMES
-- ==========================================

CREATE TABLE public.schemes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    provider TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.scheme_versions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    scheme_id UUID REFERENCES public.schemes(id) ON DELETE CASCADE,
    version_tag TEXT NOT NULL,
    max_funding_amount DECIMAL,
    status TEXT DEFAULT 'ACTIVE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.scheme_rules (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    scheme_version_id UUID REFERENCES public.scheme_versions(id) ON DELETE CASCADE,
    rule_type TEXT,
    rule_definition JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.channel_partners (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id UUID REFERENCES public.businesses(id), -- If partner is a business on platform
    partner_name TEXT NOT NULL,
    location geometry(POINT, 4326),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.partner_schemes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    channel_partner_id UUID REFERENCES public.channel_partners(id) ON DELETE CASCADE,
    scheme_id UUID REFERENCES public.schemes(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
    applicant_id UUID REFERENCES public.profiles(id),
    scheme_id UUID REFERENCES public.schemes(id),
    scheme_version_id UUID REFERENCES public.scheme_versions(id),
    channel_partner_id UUID REFERENCES public.channel_partners(id),
    status application_status DEFAULT 'DRAFT',
    requested_amount DECIMAL,
    approved_amount DECIMAL,
    submitted_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
