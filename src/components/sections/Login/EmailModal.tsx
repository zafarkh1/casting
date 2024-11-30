import { useEffect, MouseEvent } from "react";
import Button from "@/components/Button";
import { useLoginModalStore } from "@/components/utils/zustand/useLoginModalStore";
import Link from "next/link";

const EmailModal = ({ email }: { email: string }) => {
  const { onClose } = useLoginModalStore();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 lg:px-0 px-6"
      onClick={handleClickOutside}
    >
      <div className="bg-[#131313] rounded-3xl lg:p-8 text-center lg:w-[480px] py-6 px-2">
        <h5 className="heading5">Подтверждение</h5>
        <p className="lg:text-base text-sm lg:my-4 my-3 lg:mx-8 mx-2">
          Мы отправили письмо подтверждение на {email}. Пожалуйста, подтвердите
          ваш email.
        </p>
        <Link
          href="/profile"
          className="cursor-pointer py-[15px] rounded-full bg-primary lg:text-base text-sm block"
        >
          Подтвердить
        </Link>
      </div>
    </div>
  );
};

export default EmailModal;
