import { Badge } from "../ui/badge"

type TechBadgeProps = {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <Badge variant='mybadge' className='text-xs font-geist rounded-sm px-3 cursor-not-allowed mb-2 shadow-sm'>
      {name}
    </Badge>
  )
}