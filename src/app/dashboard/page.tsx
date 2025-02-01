"use client";
import React, { useContext } from "react";

// Components
import { Sidebar } from "@/components/molecules/sidebar";
import BarsChart from "@/components/molecules/bars-chart";
import LineCharts from "@/components/molecules/line-chart";
import PieCharts from "@/components/molecules/pie-chart";

// Icons
import { FaBars } from "react-icons/fa6";

// Context
import { SidebarContext } from "../../context/sidebar-context";

export default function Dashboard() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 w-full h-screen overflow-y-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-gray-800 text-white rounded">
          <FaBars />
        </button>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-x-4">
          <div className="p-4 border rounded-lg shadow-lg bg-white grow col-span-3 lg:col-span-1 mt-4">
            <LineCharts />
          </div>
          <div className="p-4 border rounded-lg shadow-lg bg-white grow col-span-3 lg:col-span-2 mt-4">
            <PieCharts />
          </div>

          <div className="p-4 border rounded-lg shadow-lg bg-white grow mt-4 col-span-3">
            <BarsChart />
          </div>
        </div>
      </div>
    </div>
  );
};



