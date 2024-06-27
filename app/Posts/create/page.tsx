import React from "react";
import Form from "./(components)/Form";
import BackArrow from "@/app/(components)/backArrow";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center relative">
      <BackArrow to={"/Posts"} />
      <Form />
    </div>
  );
};

export default page;
