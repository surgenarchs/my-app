import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "./ui/sidebar";
import { useState } from "react";
import { ArrowLeftToLine, ArrowRightFromLine } from "lucide-react"; // Import door icons

function SidebarOpen({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    setIsOpen((prev) => !prev);
    toggleSidebar();
  };

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("h-10 w-10 hidden md:flex relative", className)}
      onClick={handleClick}
      {...props}
    >
      {/* Animate the door icon swinging open and closed */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {isOpen ? <ArrowRightFromLine className="h-8 w-8 text-green-600" /> : <ArrowLeftToLine className="h-8 w-8 text-green-600" />}
      </motion.div>

      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export default SidebarOpen;
