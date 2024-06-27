import { Axios } from "@/config/axios";
import { RootState } from "@/lib/store";
import { Blog } from "@/typesGlobal";
import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  list: Blog[];
  loading: boolean;
}

const initialState: BlogState = {
  list: [],
  loading: false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.list = action.payload;
      state.loading = false;
    },
    createPost: (state, action: PayloadAction<Blog>) => {
      state.list = [...state.list, action.payload];
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { getBlogs, createPost, setLoading } = blogSlice.actions;

export const listBlog = (state: RootState) => state.blogs.list;
export const loadingBlog = (state: RootState) => state.blogs.loading;

/**
 * @Method -> GET
 * @Search -> All Blogs
 * @Optional -> use /lib/api.ts
 */
export const getAllBlogs =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.get("/api/posts/");

      dispatch(getBlogs(response.data));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      dispatch(setLoading(false));
    }
  };



  /**
 * @Method -> POST
 * @Add -> add new Post 
 * @Body -> BLOG interface ./TypesGlobal.ts
 * @Optional -> use /lib/api.ts
 */
export const createPosts =
  (post: Blog) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.post("/api/posts/", post);

      dispatch(createPost(response.data));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      dispatch(setLoading(false));
    }
  };



export default blogSlice.reducer;
