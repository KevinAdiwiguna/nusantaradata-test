"use client";

// Types
type InputFieldProps = {
  name: string;
  type?: string;
  placeholder: string;
  defaultValue?: string;
  errorMessage?: string;
};

export const InputField = ({ name, type = "text", placeholder, defaultValue, errorMessage }: InputFieldProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full p-3 border rounded-lg"
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};
