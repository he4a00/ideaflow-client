"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUserContext } from "@/app/context/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Navbar() {
  const { user } = useUserContext();
  const loggedIn = !!user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_310)">
                <g clipPath="url(#clip1_1_310)">
                  <path
                    d="M8.625 0C10.0734 0 11.25 1.17656 11.25 2.625V21.375C11.25 22.8234 10.0734 24 8.625 24C7.27031 24 6.15469 22.9734 6.01406 21.6516C5.77031 21.7172 5.5125 21.75 5.25 21.75C3.59531 21.75 2.25 20.4047 2.25 18.75C2.25 18.4031 2.31094 18.0656 2.41875 17.7562C1.00312 17.2219 0 15.8531 0 14.25C0 12.7547 0.876562 11.4609 2.14687 10.8609C1.73906 10.35 1.5 9.70312 1.5 9C1.5 7.56094 2.5125 6.36094 3.8625 6.06562C3.7875 5.80781 3.75 5.53125 3.75 5.25C3.75 3.84844 4.71563 2.66719 6.01406 2.33906C6.15469 1.02656 7.27031 0 8.625 0ZM15.375 0C16.7297 0 17.8406 1.02656 17.9859 2.33906C19.2891 2.66719 20.25 3.84375 20.25 5.25C20.25 5.53125 20.2125 5.80781 20.1375 6.06562C21.4875 6.35625 22.5 7.56094 22.5 9C22.5 9.70312 22.2609 10.35 21.8531 10.8609C23.1234 11.4609 24 12.7547 24 14.25C24 15.8531 22.9969 17.2219 21.5812 17.7562C21.6891 18.0656 21.75 18.4031 21.75 18.75C21.75 20.4047 20.4047 21.75 18.75 21.75C18.4875 21.75 18.2297 21.7172 17.9859 21.6516C17.8453 22.9734 16.7297 24 15.375 24C13.9266 24 12.75 22.8234 12.75 21.375V2.625C12.75 1.17656 13.9266 0 15.375 0Z"
                    fill="#7C3AED"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_310">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_310">
                  <path d="M0 0H24V24H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-xl font-bold">IdeaFlow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/templates"
                className="text-gray-700 hover:text-primary"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="/examples"
                className="text-gray-700 hover:text-primary"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {loggedIn ? (
            <DropdownMenu>
              {/* <span className="text-gray-700">{user.email?.slice(0, 5)}</span> */}
              <DropdownMenuTrigger
                asChild
                className="cursor-pointer outline-none"
              >
                <button className="flex items-center gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#4F46E5]/20 text-[#4F46E5]">
                    {user.email?.slice(0, 2).toUpperCase()}
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32">
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer outline-none"
                >
                  <Link
                    href={`/profile/${user?.userID}/diagrams`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer outline-none"
                >
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 z-[9999999] bg-white px-4 py-5 shadow-lg md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/templates"
            className="text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Templates
          </Link>
          <Link
            href="/examples"
            className="text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Examples
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="flex flex-col space-y-2 pt-4">
            {loggedIn ? (
              <>
                <span className="text-gray-700">{user.name}</span>
                <Link
                  href={`/profile/${user?.userID}/diagrams`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <Button variant="outline" onClick={logout} className="w-full">
                    Profile
                  </Button>
                </Link>
                <Button variant="outline" onClick={logout} className="w-full">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
