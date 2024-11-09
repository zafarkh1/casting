type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
