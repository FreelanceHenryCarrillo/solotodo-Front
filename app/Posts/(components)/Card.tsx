// Card.tsx
import { Blog } from "@/typesGlobal";
import { Button, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type CardProps = {
  blog: Blog;
};

const Card = ({ blog }: CardProps) => {
  const date = blog.created_at && new Date(blog?.created_at);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate =
    date && new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <CardContent className="w-full h-52 shadow-lg  flex flex-col justify-between p-4 gap-2">
      <Typography
        sx={{ fontSize: 13 }}
        className="font-thin"
        color="text.secondary"
        gutterBottom
      >
        {formattedDate}
      </Typography>
      <Typography
        sx={{ fontSize: 20 }}
        className="font-bold text-gray-600"
        color="text.secondary"
        gutterBottom
      >
        {blog.title}
      </Typography>
      <Typography className="text-gray-500">{blog.content}</Typography>
      <div className="flex justify-between items-center h-10">
        <Link href={`Posts/${blog.id}`}>
          <Button className="self-start">Read now</Button>
        </Link>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          className="self-end"
        >
          {blog.author}
        </Typography>
      </div>
    </CardContent>
  );
};

export default Card;
