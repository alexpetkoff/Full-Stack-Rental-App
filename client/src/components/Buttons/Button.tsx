type ButtonProps = {
  variant: "outline" | "secondary" | "search";
  children: React.ReactNode;
};

const Button = ({ variant, children }: ButtonProps) => {
  const type: Record<"outline" | "secondary" | "search", string> = {
    outline:
      "text-center px-4 py-2 text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 rounded-[8px] ring-1 ring-white font-[600]",
    secondary:
      "text-center px-4 py-2 text-white hover:text-black bg-secondary-600 hover:bg-white transition-all duration-300 rounded-[8px] ring-1 ring-secondary-600 hover:ring-white font-[600]",
    search:
      "bg-secondary-600 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-500 h-12 py-3 px-4 cursor-pointer transition-all duration-300",
  };

  const className = type[variant] ?? "";

  return <div className={className}>{children}</div>;
};

export default Button;
