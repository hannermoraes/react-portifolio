"use client"

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string
  subtitle: string
  className?: string
}

export const SectionTitle = ({
  title,
  subtitle,
  className
}: SectionTitleProps) => {
  const animProps = {
    initial: {
      opacity: 0, x: -100
    },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <motion.span
        className=" text-sm text-blue-500 font-kanit font-medium"
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        className="text-2xl font-kanit font-bold"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}
