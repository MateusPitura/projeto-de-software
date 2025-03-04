import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipShadcn,
} from "@/components/ui/tooltip";
import { Childrenable } from "@/domains/global/types";

import type { ReactNode } from "react";

interface TooltipProperties extends Childrenable {
  content: string;
  disabled?: boolean;
}

export default function Tooltip({
  children,
  content,
  disabled,
}: TooltipProperties): ReactNode {
  return (
    <TooltipProvider disableHoverableContent>
      <TooltipShadcn open={disabled ? false : undefined}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-light-outline border-light-outline text-light-onPrimary"
        >
          <span className="text-label-medium">{content}</span>
        </TooltipContent>
      </TooltipShadcn>
    </TooltipProvider>
  );
}
