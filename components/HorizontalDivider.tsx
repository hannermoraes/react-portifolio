import { cn } from "@/lib/utils"

type HorizontalDividerProps = {
  className?: string
}

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div className={cn('horizontal-divider', className)}>
    </div>
  )
}