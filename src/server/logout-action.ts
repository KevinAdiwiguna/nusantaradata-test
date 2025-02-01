"use server"
import { cookies } from "next/headers";

export const HandleLogout = async () => {
    (await cookies()).delete("authToken");
    return {
        status: true,
        message: "Logout Success",
    }
};  
