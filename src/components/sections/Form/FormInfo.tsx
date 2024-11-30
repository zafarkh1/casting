"use client";

import { Dispatch, SetStateAction } from "react";

interface FormInfoProps {
  isAgreed: boolean;
  setIsAgreed: Dispatch<SetStateAction<boolean>>;
}

const FormInfo = ({ isAgreed, setIsAgreed }: FormInfoProps) => {
  const handleRadioChange = () => {
    setIsAgreed((prev) => !prev);
  };

  return (
    <section className="flex lg:flex-row flex-col lg:justify-between lg:gap-12 gap-9 lg:mt-32 mt-20 pt-10 pb-20 border-y border-y-[#FFFFFF1A] border-b-0">
      <h1 className="heading1 lg:w-[55%]">анкета для кандидата</h1>
      <div className="relative text lg:w-[45%] lg:my-3 flex flex-col justify-between gap-6">
        <p className="text-secondary">
          Откройте для себя мир киноиндустрии и ярко объявите о себе. Заполните
          данную анкету и мы рассмотрим ее в течении 20 рабочих дней и сообщим
          вам о результате отбора
        </p>

        <div
          className="flex gap-3 items-center cursor-pointer"
          onClick={handleRadioChange}
        >
          <input
            type="checkbox"
            checked={isAgreed}
            onClick={(e) => e.stopPropagation()}
            onChange={handleRadioChange}
            className={`appearance-none w-5 h-5 rounded-full border-2 cursor-pointer ${
              isAgreed ? "bg-primary border-transparent" : "bg-transparent"
            }`}
          />
          <p>Соглашаюсь на обработку личных данных</p>
        </div>

        <div className="h-10 relative">
          {!isAgreed && (
            <>
              <span className="absolute -bottom-2 left-8 text-primary text-lg">
                Нажмите что бы продолжить
              </span>
              <img
                src="/assets/form/check.png"
                alt="check"
                className="absolute bottom-0 -left-5"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormInfo;
