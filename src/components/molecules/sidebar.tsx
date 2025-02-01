"use client";
import { useActionState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Context
import { SidebarContext } from "@/context/sidebar-context";

// Icons
import { FaBars, FaSignOutAlt } from "react-icons/fa";

// Actions
import { HandleLogout } from "@/server/logout-action";
import { toast } from "react-toastify";

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [state, action, isPending] = useActionState(HandleLogout, null);

  const router = useRouter()

  useEffect(() => {
    if(state?.status === true) {
      toast.success("Logout Success")
      router.push("/login")      
    }

  }, [state?.status, state?.message, router]);

  return (
    <div
      className={`fixed top-0 inset-y-0 left-0 w-64 bg-gray-800 text-white p-6 transition-transform z-[99] ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:relative md:translate-x-0 h-screen flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center gap-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-gray-800 text-white rounded">
            <Link href="/dashboard">
              <FaBars />
            </Link>
          </button>
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <ul className="mt-4 space-y-2">
          <Link href="/dashboard">
            <li className="p-2 bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
      <form action={action}>
        <button
          disabled={isPending}
          className="mt-auto p-2 w-full bg-red-600 hover:bg-red-700 rounded flex items-center gap-2 justify-center disabled:cursor-not-allowed"
        >
          <FaSignOutAlt /> Logout
        </button>
      </form>
    </div>
  );
};
