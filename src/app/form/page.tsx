"use client";

import { useState } from "react";
import FormFilter from "@/components/sections/Form/FormFilter";
import FormInfo from "@/components/sections/Form/FormInfo";

const Page = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="myContainer">
      <FormInfo isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
      <FormFilter isAgreed={isAgreed} />
    </div>
  );
};

export default Page;
