import { supabase } from '../lib/supabase';
import { uploadFile } from '../services/imageService';

// Helper function to handle errors
const handleError = (error) => {
    console.error("Error:", error);
    return { success: false, msg: error.message };
};

export const createOrUpdatePost = async (post) => {
    try {
        if (post.file && typeof post.file === 'object') {
            const isImage = post?.file?.type?.startsWith('image');
            const isVideo = post?.file?.type?.startsWith('video');
            let folderName = isImage ? 'postImages' : isVideo ? 'postVideos' : null;
            
            if (!folderName) {
                return { success: false, msg: 'Unsupported file type' };
            }

            const fileRes = await uploadFile(folderName, post?.file?.uri, isImage);
            if (fileRes.success) {
                post.file = fileRes.data;
            } else {
                return fileRes;
            }
        }

        const { data, error } = await supabase
            .from('posts')
            .upsert(post)
            .select()
            .single();

        if (error) return handleError(error);
        return { success: true, data };

    } catch (error) {
        return handleError(error);
    }
};

export const fetchPosts = async (limit = 10) => {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select(`*,user:users(id,name,image),postLikes(*)`)
            .limit(limit)
            .order('created_at', { ascending: false });

        if (error) return handleError(error);
        return { success: true, data };

    } catch (error) {
        return handleError(error);
    }
};

export const createPostLike = async (postLike) => {
    try {
        const { data, error } = await supabase
            .from('postLikes')
            .insert(postLike)
            .select()
            .single();

        if (error) return handleError(error);
        return { success: true, data };

    } catch (error) {
        return handleError(error);
    }
};

export const removePostLike = async (postId, userId) => {
    try {
        const { error } = await supabase
            .from('postLikes')
            .delete()
            .eq('userId', userId)
            .eq('postId', postId);

        if (error) return handleError(error);
        return { success: true };

    } catch (error) {
        return handleError(error);
    }
};

export const fetchPostsDetails = async (postId) => {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select(`*,
                user:users(id,name,image),
                postLikes(*)`)
            .eq('id', postId)
            .single();

        if (error) return handleError(error);
        return { success: true, data };

    } catch (error) {
        return handleError(error);
    }
};
