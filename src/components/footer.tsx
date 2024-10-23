import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Dock, DockIcon } from "./ui/dock";
import { buttonVariants } from "./ui/button";
import { Home, TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-8 text-center">
      <TooltipProvider>
        <Dock
          className="gap-3 rounded-full hover:gap-0"
          magnification={70}
          distance={300}
          direction="middle"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={"/"}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "box-content size-12 rounded-full p-2 transition-all duration-200"
                  )}
                >
                  <Home />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={"/trending"}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "box-content size-12 rounded-full p-2 transition-all duration-200"
                  )}
                >
                  <TrendingUp />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Trending</TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </footer>
  );
};

export default Footer;
