-- ==========================================
-- 011. ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Enable RLS on core tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- 1. Profiles: Anyone can view profiles. Users can only update their own profile.
CREATE POLICY "Public Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Businesses: Publicly viewable. Only members can update.
CREATE POLICY "Businesses are viewable by everyone" ON public.businesses FOR SELECT USING (true);
CREATE POLICY "Business members can update" ON public.businesses FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = id AND user_id = auth.uid())
);

-- 3. Applications: Strictly private. Only business members can view or update.
CREATE POLICY "Applications are viewable by business members" ON public.applications FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = applications.business_id AND user_id = auth.uid())
);
CREATE POLICY "Applications can be created by business members" ON public.applications FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = applications.business_id AND user_id = auth.uid())
);

-- 4. Documents: Strictly private.
CREATE POLICY "Documents viewable by owners" ON public.documents FOR SELECT USING (
    owner_id = auth.uid() OR EXISTS (SELECT 1 FROM public.business_members WHERE business_id = documents.business_id AND user_id = auth.uid())
);
