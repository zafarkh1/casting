import { useEffect, MouseEvent } from "react";
import Button from "@/components/Button";
import { useLoginModalStore } from "@/components/utils/zustand/useLoginModalStore";

const LoginModal = () => {
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
      <div className="bg-[#131313] rounded-3xl lg:p-8 text-center lg:w-[600px] py-6 px-2">
        <h5 className="heading5">Войдите в аккаунт</h5>
        <p className="lg:text-base text-sm lg:my-4 my-3 lg:mx-8 mx-2">
          Что-бы заполнить анкету войдите в аккаунт или пройдите регистрацию
        </p>
        <div className="lg:text-base text-sm grid grid-cols-2 gap-[10px]">
          <Button className="py-2 rounded-full bg-[#333333]" onClick={onClose}>
            Отменить
          </Button>
          <Button
            className="py-2 rounded-full bg-primary"
            onClick={() => (window.location.href = "/login")}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
