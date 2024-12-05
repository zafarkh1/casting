"use client";

import { FormProvider, useForm } from "react-hook-form";
import CreateForm from "../Profile/CreateForm";

const FormFilter = ({ isAgreed }: { isAgreed: boolean }) => {
  const methods = useForm();

  return (
    <>
      {isAgreed && (
        <div className="">
          <FormProvider {...methods}>
            <CreateForm />
          </FormProvider>
        </div>
      )}
    </>
  );
};

export default FormFilter;
