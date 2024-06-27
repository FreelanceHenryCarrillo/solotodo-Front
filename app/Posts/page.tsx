// app/Posts/page.tsx
import React from "react";
import { fetchBlogs } from "@/lib/api";
import ClientComponent from "../(components)/ClientComponent";

const Page = async () => {
  const blogs = await fetchBlogs();

  return <ClientComponent blogs={blogs} />;
};

export default Page;