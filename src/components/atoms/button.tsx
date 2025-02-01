"use client";

// Types
type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({ children, type = "button", isLoading, disabled }: ButtonProps) => {
  return (
    <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-500" type={type} disabled={disabled}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};
