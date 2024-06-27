import { Axios } from "@/config/axios";
import { RootState } from "@/lib/store";
import { Blog } from "@/typesGlobal";
import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

interface BlogDetailState {
  blog: Blog;
  loading: boolean;
}

const initialState: BlogDetailState = {
  blog: {} as Blog,
  loading: false,
};

export const blogDetailSlice = createSlice({
  name: "blogDetail",
  initialState,
  reducers: {
    getById: (state, action: PayloadAction<Blog>) => {
      state.blog = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { getById, setLoading } = blogDetailSlice.actions;

export const blogDetailSelector = (state: RootState) => state.blogDetail.blog;
export const loadingBlogDetail = (state: RootState) => state.blogDetail.loading;

/**
 * @Method : GET
 * @Search By ID
 * @Optional -> use /lib/api.ts
 */
export const getPostById =
  (id: string) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.get(`/api/posts/${id}/`);

      dispatch(getById(response.data));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      dispatch(setLoading(false));
    }
  };

export default blogDetailSlice.reducer;
