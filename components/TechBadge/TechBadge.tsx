"use client"

import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { ComponentProps } from "react"

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span className="" {...props}>
      <Badge variant='mybadge' className='text-xs font-geist rounded-sm px-3 cursor-not-allowed mb-2 shadow-sm'
      >
        {name}
      </Badge>
    </motion.span>
  )
}