import * as React from "react";
import * as CustomPopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const CustomPopover = CustomPopoverPrimitive.Root;

const CustomPopoverTrigger = CustomPopoverPrimitive.Trigger;

const CustomPopoverAnchor = CustomPopoverPrimitive.Anchor;

const CustomPopoverContent = React.forwardRef<
  React.ElementRef<typeof CustomPopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CustomPopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <CustomPopoverPrimitive.Portal>
    <CustomPopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `z-50 rounded-full absolute -top-24 -right-14 
        bg-transparent p-1 text-popover-foreground  outline-none 
        /* Opening animations */
        data-[state=open]:animate-in
        data-[state=open]:fade-in-0
        data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-bottom-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2

        /* Closing animations */
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95
        data-[side=bottom]:slide-out-to-bottom-2
        data-[side=left]:slide-out-to-left-2
        data-[side=right]:slide-out-to-right-2
        data-[side=top]:slide-out-to-top-2`,
        className
      )}
      {...props}
    />
  </CustomPopoverPrimitive.Portal>
));
CustomPopoverContent.displayName = CustomPopoverPrimitive.Content.displayName;

export {
  CustomPopover,
  CustomPopoverTrigger,
  CustomPopoverContent,
  CustomPopoverAnchor,
  CustomPopoverPrimitive,
};
