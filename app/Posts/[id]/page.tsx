"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import BackArrow from "@/app/(components)/backArrow";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  blogDetailSelector,
  getPostById,
  loadingBlogDetail,
} from "@/lib/features/blog/BlogDetail";

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(blogDetailSelector);
  const loading = useAppSelector(loadingBlogDetail);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

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

export default page;
