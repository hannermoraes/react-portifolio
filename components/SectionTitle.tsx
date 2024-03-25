import { cn } from "@/lib/utils";

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
  return (
    <div className="">
      <div className={cn("flex flex-col gap-4", className)}>
        <p className=" text-sm text-blue-500 font-kanit font-medium">{`../${subtitle}`}</p>
        <h3 className="text-2xl font-kanit font-bold">
          {title}
        </h3>
      </div>
    </div>
  )
}
