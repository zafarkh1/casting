import Button from "@/components/Button";
import { useLoginModalStore } from "@/components/utils/zustand/useLoginModalStore";

const LoginModal = () => {
  const { onClose } = useLoginModalStore();

  return (
    <section className="min-h-screen">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[#131313] rounded-3xl p-8 text-center lg:w-[600px]">
        <h5 className="heading5">Войдите в аккаунт</h5>
        <p className="text-base lg:my-4 my-2 mx-8">
          Что-бы заполнить анкету войдите в аккаунт или пройдите регистрацию{" "}
        </p>
        <div className="space-x-2">
          <Button
            className="py-2 lg:px-7 px-4 rounded-full bg-[#333333]"
            onClick={() => onClose()}
          >
            Отменить
          </Button>
          <Button
            className="py-2 lg:px-7 px-4 rounded-full bg-primary"
            onClick={() => (window.location.href = "/login")}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoginModal;
