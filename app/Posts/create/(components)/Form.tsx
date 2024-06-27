"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input, InputLabel, TextareaAutosize } from "@mui/material";
import { Blog } from "../../../../typesGlobal";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createPosts, loadingBlog } from "@/lib/features/blog/BlogSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


function Form() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(loadingBlog)
  const router = useRouter();

  const [blog, setBlog] = useState<Blog>({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!blog.title || !blog.content || !blog.author) {
      toast.warn("Todos los campos son obligatorios");
      return;
    }
    try {
      await dispatch(createPosts(blog));
      toast.success("Post creado exitosamente");
      setBlog({
        title: "",
        content: "",
        author: "",
      });
      router.push("/Posts");
    } catch (error) {
      console.error("Error al crear el post:", error);
      toast.error("Error al crear el post");
    }
  };

  return (
    <form
      className="flex flex-col justify-between gap-4 shadow-xl w-[800px] h-[500px] p-8"
      onSubmit={handleSubmit}
    >
      <InputLabel htmlFor="title-input">Título</InputLabel>
      <Input
        id="title-input"
        aria-describedby="title-helper-text"
        name="title"
        value={blog.title}
        onChange={handleChange}
      />

      <InputLabel htmlFor="content-input">Contenido</InputLabel>
      <TextareaAutosize
        id="content-input"
        aria-describedby="content-helper-text"
        maxRows={4}
        minRows={4}
        className="border-b-2 border-black/30"
        name="content"
        value={blog.content}
        onChange={handleChange}
      />

      <InputLabel htmlFor="author-input">Autor</InputLabel>
      <Input
        id="author-input"
        aria-describedby="author-helper-text"
        name="author"
        value={blog.author}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" disabled={loading}>
        Agregar
      </Button>
    </form>
  );
}

export default Form;
