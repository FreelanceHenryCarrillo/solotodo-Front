/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  getAllBlogs,
  listBlog,
  loadingBlog,
} from "@/lib/features/blog/BlogSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { ChangeEvent, useEffect, useState } from "react";
import Card from "./(components)/Card";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Filter, TypeFilter } from "@/typesGlobal";

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(listBlog);
  const loading = useAppSelector(loadingBlog);
  const [selectfilter, setselectfilter] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const sortedList =
    selectfilter === Filter.LASTEST
      ? [...list].sort((a, b) => {
          if (b.created_at && a.created_at) {
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          }
          return a.title.localeCompare(b.title);
        })
      : list;

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  console.log(searchInput)
  const handleChange = (
    e: SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: TypeFilter
  ) => {
    if (type === TypeFilter.SELECT) setselectfilter(e.target.value);
    if (type === TypeFilter.SEARCH) setSearchInput(e.target.value)
  };

  return (
    <aside className="w-[100vw] h-[100vh]  bg-gray-100 flex flex-col items-center ">
      <section className="flex flex-col w-full max-w-[1420px] h-full p-2 gap-2 overflow-hidden overflow-y-auto">
        <div className=" w-full flex h-14  items-center justify-between ">
          <div className="">
            <TextField
              id="filled-basic"
              label="Search"
              variant="outlined"
              onChange={(e) => handleChange(e, TypeFilter.SEARCH)}
            />
          </div>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="h-full mr-10 w-44 text-black"
              value={selectfilter}
              onChange={(e) => handleChange(e, TypeFilter.SELECT)}
            >
              <MenuItem value={"Not Filter"}>Not Filter</MenuItem>
              <MenuItem value={"lastest"}>Lastest</MenuItem>
            </Select>
          </div>
        </div>
        <div className="flex flex-col  gap-4 pr-4 overflow-auto h-full  scroll-bar items-center justify-between">
          {loading ? (
            <span className="loader"></span>
          ) : (
            sortedList
              .filter((fil) =>
                searchInput
                  ? fil.title.toLowerCase().includes(searchInput.toLowerCase())
                  : true
              )
              .map((blog, index) => <Card key={index} blog={blog} />)
          )}
        </div>
      </section>
    </aside>
  );
};

export default page;
