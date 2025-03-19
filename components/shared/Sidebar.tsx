"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SideBarItems } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();
  const userID = pathname.split("/")[2];

  return (
    <div className="flex flex-col h-full p-2">
      <div className="flex flex-col gap-7 p-2">
        {SideBarItems(userID).map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 text-sm font-medium",
                  isActive
                    ? "text-purple-700 bg-[#EDE9FE] rounded-md"
                    : "text-slate-700 hover:text-purple-700"
                )}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-center md:justify-start gap-3 hover:bg-[#EDE9FE] p-3 rounded-md w-full"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.title}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
