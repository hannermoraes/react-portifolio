import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline:
          "text-foreground",
        mybadge:
          "border-transparent bg-blue-700/90 text-blue-100 hover:bg-blue-950 hover:text-blue-600 shadow-lg dark:bg-blue-950 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-blue-100",
        workOn:
          "border-transparent opacity-90 bg-emerald-800 text-destructive-foreground shadow-lg hover:bg-emerald-400/80",
        status:
          "border-transparent bg-emerald-700/90 text-emerald-100 hover:bg-emerald-950 hover:text-emerald-600 shadow-lg dark:bg-emerald-950 dark:text-emerald-500 dark:hover:text-emerald-100 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
