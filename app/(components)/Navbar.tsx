import { Button, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex w-full h-16 items-center justify-center p-4 shadow-xl ">
      <div className=" flex w-full items-center justify-between  max-w-[1440px]">
        <div className="text-xl font-light">
          BLOG{" "}
          <span className="font-extrabold text-blue-500 text-xl"> HENRY </span>
        </div>
        <div className="flex gap-4">
          <Link href={"/Posts"}>
            <Button variant="contained" className=" text-white rounded-md ">
              Inicio
            </Button>
          </Link>
          <Link href={"/Posts/create"}>
            <Button variant="contained" className="  text-white rounded-md ">
              Crear Articulo{" "}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
