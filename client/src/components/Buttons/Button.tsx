type ButtonProps = {
  variant: "outline" | "secondary";
  children: React.ReactNode;
};

const Button = ({ variant, children }: ButtonProps) => {
  const type: Record<"outline" | "secondary", string> = {
    outline:
      "text-center px-4 py-2 text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 rounded-[8px] ring-1 ring-white font-[600]",
    secondary:
      "text-center px-4 py-2 text-white hover:text-black bg-secondary-600 hover:bg-white transition-all duration-300 rounded-[8px] ring-1 ring-secondary-600 hover:ring-white font-[600]",
  };

  const className = type[variant] ?? "";

  return <div className={className}>{children}</div>;
};

export default Button;
