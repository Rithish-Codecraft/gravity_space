-- ==========================================
-- 012. PHASE 1 RLS FIXES
-- ==========================================

-- 1. Businesses INSERT policy
CREATE POLICY "Authenticated users can create businesses" ON public.businesses FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- 2. Business Members policies
CREATE POLICY "Members are viewable by everyone" ON public.business_members FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert members" ON public.business_members FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Members can update their own business members" ON public.business_members FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.business_members bm WHERE bm.business_id = business_members.business_id AND bm.user_id = auth.uid() AND bm.role IN ('OWNER', 'ADMIN'))
);

-- 3. Enable RLS for Business Intelligence tables
ALTER TABLE public.capabilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- 4. Policies for Capabilities
CREATE POLICY "Capabilities viewable by everyone" ON public.capabilities FOR SELECT USING (true);
CREATE POLICY "Business members can insert capabilities" ON public.capabilities FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = capabilities.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can update capabilities" ON public.capabilities FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = capabilities.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can delete capabilities" ON public.capabilities FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = capabilities.business_id AND user_id = auth.uid())
);

-- 5. Policies for Requirements
CREATE POLICY "Requirements viewable by everyone" ON public.requirements FOR SELECT USING (true);
CREATE POLICY "Business members can insert requirements" ON public.requirements FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = requirements.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can update requirements" ON public.requirements FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = requirements.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can delete requirements" ON public.requirements FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = requirements.business_id AND user_id = auth.uid())
);

-- 6. Policies for Products
CREATE POLICY "Products viewable by everyone" ON public.products FOR SELECT USING (true);
CREATE POLICY "Business members can insert products" ON public.products FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = products.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can update products" ON public.products FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = products.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can delete products" ON public.products FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = products.business_id AND user_id = auth.uid())
);

-- 7. Policies for Services
CREATE POLICY "Services viewable by everyone" ON public.services FOR SELECT USING (true);
CREATE POLICY "Business members can insert services" ON public.services FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = services.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can update services" ON public.services FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = services.business_id AND user_id = auth.uid())
);
CREATE POLICY "Business members can delete services" ON public.services FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.business_members WHERE business_id = services.business_id AND user_id = auth.uid())
);
