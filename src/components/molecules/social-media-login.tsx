// Constants
import { LOGIN_METHODS } from "@/constants/login-method";

// Components
import { Icon } from "@/components/atoms/icon";

export function SocialLoginButtons() {
  return (
    <div className="flex justify-center gap-4 mt-2">
      {LOGIN_METHODS.map((method) => {
        return (
          <form action={method.action} key={method.name}>
            <button className="p-2 border rounded-full hover:bg-gray-200">
              <Icon Icon={method.icon} className="text-gray-600" />
            </button>
          </form>
        );
      })}
    </div>
  );
}
