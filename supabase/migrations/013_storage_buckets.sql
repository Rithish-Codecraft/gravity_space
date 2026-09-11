-- ==========================================
-- 013. STORAGE BUCKETS & POLICIES
-- ==========================================

-- Insert the 'media' bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- RLS for Storage Objects (media bucket)
-- 1. Anyone can view media
CREATE POLICY "Public media is viewable by everyone"
ON storage.objects FOR SELECT
USING (bucket_id = 'media');

-- 2. Authenticated users can upload media
CREATE POLICY "Authenticated users can upload media"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'media' 
    AND auth.role() = 'authenticated'
);

-- 3. Users can only update/delete their own media
CREATE POLICY "Users can update their own media"
ON storage.objects FOR UPDATE
USING (
    bucket_id = 'media' 
    AND auth.uid() = owner
);

CREATE POLICY "Users can delete their own media"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'media' 
    AND auth.uid() = owner
);
