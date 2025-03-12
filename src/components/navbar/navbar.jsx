"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IndianRupee, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   console.log(theme, "theme");
  //   setTheme(theme);
  // }, [theme]);
  return (
    <nav className="bg-background shadow-md border-y">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center cursor-pointer">
            <Link href="/" legacyBehavior passHref className="flex">
              <span className="text-xl sm:text-2xl font-bold flex items-center">
                <IndianRupee className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold  ">Gootrgoo</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/login" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Chat
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/login" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Video Call
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md">Login</Button>
            <Tabs defaultValue="system" className="w-[80px] sm:w-[100px]" value={theme} onValueChange={setTheme}>
              <TabsList className="h-8 sm:h-10">
                <TabsTrigger value="light" className="cursor-pointer">
                  <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
                </TabsTrigger>
                <TabsTrigger value="system" className="cursor-pointer">
                  <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                </TabsTrigger>
                <TabsTrigger value="dark" className="cursor-pointer">
                  <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
           {/* Mobile menu button */}
           <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>


        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && 
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isLogin && <React.Fragment>
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                Home
              </Link>
              <Link href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                Features
              </Link>
            </React.Fragment>
            }
            {/* {isLogin &&
              <React.Fragment>
                <Link href="employee-details" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                  Employee Details
                </Link>
                <Link href="my-learning" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                  My Learning
                </Link>
                <Link href="projects" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                  Project Details
                </Link>
              </React.Fragment>
            } */}
            {!isLogin && <Button className="mt-2 w-full" onClick={userAuth}>Login</Button>}
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;


