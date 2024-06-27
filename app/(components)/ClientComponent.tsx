// app/Posts/clientComponent.tsx
"use client";

import React, { ChangeEvent, useState } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Blog, Filter, TypeFilter } from "@/typesGlobal";
import Card from "../Posts/(components)/Card";

type ClientComponentProps = {
  blogs: Blog[]
};

const ClientComponent = ({ blogs }: ClientComponentProps) => {
  const [selectfilter, setselectfilter] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const sortedList =
    selectfilter === Filter.LASTEST
      ? [...blogs].sort((a, b) => {
          if (b.created_at && a.created_at) {
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          }
          return a.title.localeCompare(b.title);
        })
      : blogs;

  const handleChange = (
    e: SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: TypeFilter
  ) => {
    if (type === TypeFilter.SELECT) setselectfilter(e.target.value);
    if (type === TypeFilter.SEARCH) setSearchInput(e.target.value);
  };

  return (
    <aside className="h-full bg-gray-100 flex flex-col items-center">
      <section className="flex flex-col w-full max-w-[1420px] h-full p-2 gap-2 overflow-hidden overflow-y-auto">
        <div className="w-full flex h-14 items-center justify-between">
          <div className="">
            <TextField
              id="filled-basic"
              label="Buscar"
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
              <MenuItem value={"Not Filter"}>Sin filtro</MenuItem>
              <MenuItem value={"lastest"}>Más recientes</MenuItem>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-4 pr-4 overflow-auto h-[86%] scroll-bar">
          {sortedList
            .filter((fil) =>
              searchInput
                ? fil.title.toLowerCase().includes(searchInput.toLowerCase())
                : true
            )
            .map((blog, index) => <Card key={index} blog={blog} />)}
        </div>
      </section>
    </aside>
  );
};

export default ClientComponent;
