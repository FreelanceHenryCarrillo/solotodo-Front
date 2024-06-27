"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import DetailComponent from "@/app/(components)/DetailComponent";
import { fetchBlogById } from "@/lib/api";
import { useParams } from "next/navigation";

import React from "react";

const page = async () => {
  const { id } = useParams<{ id: string }>();
  const blogs = await fetchBlogById(id);

  return <DetailComponent  blog={blogs}/>;
};

export default page;
