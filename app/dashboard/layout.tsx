"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import { AppSidebar } from "../../components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { Toaster } from "react-hot-toast";
import { ModeToggle } from "@/components/dark-light";
import SidebarOpen from "@/components/sidebarOpen";
import MobileSidebar from "@/components/mobilebar";
import { Profile } from "@/components/profile";


export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get current path (e.g., /dashboard/settings)
  const pathSegments = pathname.split("/").filter(Boolean); // Split path into segments

  return (
    <SidebarProvider >
      {/* Sidebar Component */}
      <AppSidebar />
      <SidebarInset className="">
        {/* Header Section */}
        <header className="flex h-16 mr-2 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Sidebar Toggle Button */}
            <SidebarOpen className="-ml-1" />
            <MobileSidebar />
            

            {/* Breadcrumb Navigation */}
            <Breadcrumb>
              <BreadcrumbList>
                {/* Always show "Surgen" as the first breadcrumb */}
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">
                      <span>Surgen</span>
                    </Link>
                  </BreadcrumbLink>
                  
                </BreadcrumbItem>

                

                {/* Dynamically generate breadcrumbs based on the path */}
                {pathSegments.map((segment, index) => {
                  const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathSegments.length - 1; // Check if last breadcrumb

                  return (
                    <div key={href} className="flex items-center">
                      <BreadcrumbSeparator className="hidden md:block mx-2" />
                      <BreadcrumbItem>
                        {isLast ? (
                          // Render last segment as plain text (non-clickable)
                          <BreadcrumbPage>{decodeURIComponent(segment)}</BreadcrumbPage>
                        ) : (
                          // Render intermediate segments as links
                          <BreadcrumbLink asChild>
                            <Link href={href}>{decodeURIComponent(segment)}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </div>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* profile */}

          

          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center">
            <Profile />
            <ModeToggle />
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex">
          <div className="flex-1 h-[87vh] rounded-xl border overflow-y-scroll">
    
                {children}

            {/* Toast Notifications */}
            <Toaster position="bottom-right" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
