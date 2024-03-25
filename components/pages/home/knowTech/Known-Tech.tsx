import { differenceInMonths } from "date-fns"
import { ReactNode } from "react"

type KnownTechProps = {
  tech: {
    icon: ReactNode
    name: string
    startDate: Date
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {

  const calculateExperience = (startDate: Date) => {
    const currentDate = new Date()
    const monthsOfExperience = differenceInMonths(currentDate, startDate)
    const years = Math.floor(monthsOfExperience / 12)
    const months = monthsOfExperience % 12


    let experience = '';

    if (years > 0) {
      experience += `${years} ano${years !== 1 ? 's' : ''}`;
    }

    if (years > 0 && months > 0) {
      experience += ' e ';
    }

    if (months > 0) {
      experience += `${months} ${months === 1 ? 'mês' : 'meses'}`;
    }

    return experience;
  };

  const experience = calculateExperience(tech.startDate)

  return (
    <div className="w-full h-24 p-6 pb-3 group rounded-lg shadow-md text-gray-500 flex bg-gray-500/20 flex-col gap-2 hover:shadow-blue-600/15 hover:bg-gray-300/20 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg transition-all cursor-pointer font-kanit low-bounce dark:hover:bg-gray-50/20 ">
      <div className="relative flex items-center justify-between">
        <p className="font-semibold text-sm">{tech.name}</p>
        <p className="text-3xl absolute right-2 top-3 group-hover:animate-bounce">{tech.icon}</p>
      </div>
      <span className="font-light text-sm mt-0.5">{experience}</span>
    </div>
  )
}