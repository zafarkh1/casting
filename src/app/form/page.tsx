"use client";

import FormFilter from "@/components/sections/Form/FormFilter";
import FormInfo from "@/components/sections/Form/FormInfo";
import Contact from "@/components/sections/Home/Contact";
import { useState } from "react";

const page = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="myContainer">
      <FormInfo isAgreed={isAgreed} setIsAgreed={setIsAgreed} />
      <FormFilter isAgreed={isAgreed} />
      <Contact heading="ОТПРАВИТЬ" />
    </div>
  );
};

export default page;
