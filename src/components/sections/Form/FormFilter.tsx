"use client";

import { Dispatch, SetStateAction } from "react";
import Filter from "../Search/Filter";

const FormFilter = ({ isAgreed }: { isAgreed: boolean }) => {
  return <>{isAgreed && <Filter />}</>;
};

export default FormFilter;
