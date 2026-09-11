-- ==========================================
-- 002. IDENTITY (Linked to Supabase auth.users)
-- ==========================================

CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    name TEXT NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    preferences JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.industries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE public.businesses (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    legal_name TEXT,
    description TEXT,
    logo_url TEXT,
    cover_url TEXT,
    business_type TEXT,
    industry_id UUID REFERENCES public.industries(id),
    sector TEXT,
    founded_year INTEGER,
    employee_count INTEGER,
    website TEXT,
    public_email TEXT,
    public_phone TEXT,
    country TEXT,
    state TEXT,
    city TEXT,
    postal_code TEXT,
    location geometry(POINT, 4326),
    verification_status TEXT DEFAULT 'UNVERIFIED',
    verification_level INTEGER DEFAULT 0,
    profile_completion INTEGER DEFAULT 0,
    status TEXT DEFAULT 'ACTIVE',
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.business_members (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    role business_role DEFAULT 'MEMBER',
    status TEXT DEFAULT 'ACTIVE',
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(business_id, user_id)
);

CREATE TABLE public.business_verifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
    verification_type TEXT NOT NULL, -- e.g., 'GSTIN', 'UDYAM'
    identifier_value TEXT NOT NULL,
    verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
