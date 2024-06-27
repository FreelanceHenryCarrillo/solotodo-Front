"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import DetailComponent from "@/app/(components)/DetailComponent";
import { fetchBlogById } from "@/lib/api";
import { useParams } from "next/navigation";

import React from "react";

const page = async () => {
  const { id } = useParams<{ id: string }>();
  const blogs = await fetchBlogById(id);

if(!blogs) return <div className="flex w-ful h-full text-8xl items-center justify-center">Not found!</div>

  return <DetailComponent blog={blogs} />;
};

export default page;
