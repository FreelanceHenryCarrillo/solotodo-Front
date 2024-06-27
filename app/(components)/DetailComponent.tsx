"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { loadingBlogDetail } from "@/lib/features/blog/BlogDetail";
import BackArrow from "./BackArrow";
import { Blog } from "@/typesGlobal";

type Props = {
  blog: Blog;
};

const DetailComponent = ({ blog }: Props) => {
  const loading = useAppSelector(loadingBlogDetail);

  return (
    <div className="w-[100vw] h-[93vh] flex flex-col items-center justify-center relative">
      <BackArrow to={"/Posts"} />
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="max-w-[1440px] flex flex-col gap-10">
          <div className="text-5xl font-extrabold self-start">
            {" "}
            {blog.title}
          </div>
          <div className="">{blog.content}</div>
          <div className="font-bold"> {blog.author}</div>
        </div>
      )}
    </div>
  );
};

export default DetailComponent;
