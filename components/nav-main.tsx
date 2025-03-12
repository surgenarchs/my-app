"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
  onClick, // Accept onClick prop
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string }[];
  }[];
  onClick: () => void; // Type for onClick function
}) {
  const pathname = usePathname();
  const [openStates, setOpenStates] = useState<Record<string, boolean>>(
    Object.fromEntries(items.map((item) => [item.title, item.isActive || false]))
  );

  const toggleCollapse = (title: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>What we do</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isOpen = openStates[item.title];

          return (
            <div key={item.title} className="overflow-hidden">
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={item.title}
                  onClick={() => { 
                    toggleCollapse(item.title);
                    if (!item.items) onClick(); // Close sidebar if no subitems
                  }}
                >
                  {item.icon && <item.icon />}
                  <span className="text-sm">{item.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-auto"
                  >
                    <ChevronRight />
                  </motion.div>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url} onClick={onClick}>
                              <span
                                className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                                  pathname === subItem.url ? "" : ""
                                }`}
                              >
                                {subItem.title}
                              </span>
                              {pathname === subItem.url && (
                                  <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 h-[2px] w-full bg-green-500"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                  />
                                )}

                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
