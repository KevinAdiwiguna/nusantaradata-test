import { FaFacebook, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

import { LoginWithFacebook, LoginWithGoogle, LoginWithX } from "@/server/login-action";

type LoginMethod = {
  icon: IconType;
  name: string;
  action: (formData: FormData) => Promise<void>;
};

export const LOGIN_METHODS: LoginMethod[] = [
  {
    icon: FaGoogle,
    name: "Google",
    action: LoginWithGoogle,
  },
  {
    icon: FaXTwitter,
    name: "X",
    action: LoginWithX,
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    action: LoginWithFacebook,
  },
];
