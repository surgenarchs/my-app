"use client";

import Link from "next/link";
import Image from "next/image";
import { BrainCircuit, Command, PhoneCall } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";


const navMain = [
  {
    title: "Explore",
    url: "/dashboard/",
    icon: BrainCircuit,
    isActive: true,
    items: [
      { title: "Portfolio", url: "/dashboard/portfolio" },
      { title: "Services", url: "/dashboard/services" },
    ],
  },
];

const navSecondary = [
  { title: "Reach out", url: "/dashboard/contacts", icon: PhoneCall },
  { title: "About Us", url: "/dashboard/about", icon: PhoneCall },
  { title: "Legal Policies", url: "/dashboard/legal", icon: Command },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
   

    <Sidebar variant="inset" {...props} className="w-full md:w-64">

      <Link href="/dashboard"> 
        <SidebarHeader className="flex items-center gap-3 p-4 border-b">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full shadow-lg border border-green-400" />
          <div className="text-left">
            <span className="text-lg font-semibold">Surgen Archs</span>
            <span className="block text-sm text-gray-500">Hands-on Solutions</span>
          </div>
        </SidebarHeader>
      </Link>

      <SidebarContent className="flex flex-col gap-2 p-4">
        <NavMain items={navMain} onClick={() => {}} />
        
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter className="border-t p-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Surgen Archs
      </SidebarFooter>
    </Sidebar>

  );
}