import { Badge } from "../ui/badge"

type StatusProjectOnProps = {
  name: string
}

export const StatusProjectOn = ({ name }: StatusProjectOnProps) => {
  return (
    <div className="flex">
      <Badge variant='status' className='mb-0 text-xs font-geist rounded-sm px-3 cursor-not-allowed shadow-sm'>
        {name}
      </Badge>
    </div>
  )
}