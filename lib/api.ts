import { Axios } from "@/config/axios";

export const fetchBlogs = async () => {
    try {
      const response = await Axios.get("/api/posts/");
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  };
  
  export const fetchBlogById = async (id: string) => {
    try {
      const response = await Axios.get(`/api/posts/${id}/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog by ID:", error);
      return null;
    }
  };