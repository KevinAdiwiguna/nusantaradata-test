"use client";

import React, { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Actions
import { LoginCredentials } from "@/server/login-action";

// Components
import { InputField } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(LoginCredentials, {
    status: false,
    code: 0,
    message: "",
    previousState: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (state?.status === true) {
      toast.success("Login Success");
      router.push("/dashboard");
    }
  }, [state.code, state.message, state.status, router]);

  return (
    <form className="mt-6 space-y-4" action={action}>
      <InputField
        name="email"
        type="email"
        placeholder="User Name or Email ID"
        defaultValue={state.previousState?.email}
        errorMessage={state?.errors?.find((err) => err.includes("Email"))}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Password"
        defaultValue={state.previousState?.password}
        errorMessage={state?.errors?.find((err) => err.includes("Password"))}
      />

      {(state?.code === 400 || state.code === 405) && <p className="text-red-500 text-sm">{state.message}</p>}

      <Button type="submit" isLoading={isPending} disabled={isPending}>
        Login
      </Button>
    </form>
  );
};
