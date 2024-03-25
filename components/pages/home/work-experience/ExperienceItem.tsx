import { TechBadge } from '@/components/TechBadge/TechBadge';
import Image from 'next/image';
import { intervalToDuration, formatDuration, } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';

type ExperienceItemProps = {
  imageLogo: string;
  imageLogoAlt: string;
  company: string;
  job: string;
  description: string;
  startDate: Date;
  endDate: Date;
  technologies?: string[];
};

export const ExperienceItem = ({
  imageLogo,
  imageLogoAlt,
  company,
  job,
  description,
  startDate,
  endDate,
  technologies,
}: ExperienceItemProps) => {
  // const timeExperience = calculateExperienceTime(startDate, endDate);

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16  rounded-full p-0.5">
          <Image
            className='w-full h-full object-contain'
            src={imageLogo}
            alt={imageLogoAlt}
            width={52}
            height={52} />
        </div>
        <div className="h-full w-[1px] bg-foreground"></div>
      </div>
      <div>
        <div className="flex flex-col text-sm sm:text-base">
          <h1 className="font-kanit text-lg font-extrabold mt-3.5">{`${company}`}</h1>
          <h2 className="font-geist text-md font-extrabold mt-4">{job}</h2>

          <Badge variant={'secondary'} className='mb-8 px-1 mx-0 w-fit rounded-sm '>
            <span className="capitalize text-xs font-geist flex justify-start items-center">
              {`${startDate.toLocaleString('default', { month: 'short', })} ${startDate.getFullYear()} - 
            ${endDate.toLocaleString('default', { month: 'short' })} ${endDate.getFullYear()}`}
            </span>
          </Badge>

          <p className="font-normal font-geist mb-7">{description}</p>
        </div>
        {technologies && (
          <div className="flex gap-x-1.5 flex-wrap lg:max-w-[460px] mb-8">
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function calculateExperienceTime(startDate: Date, endDate: Date): string {
  const duration = intervalToDuration({ start: startDate, end: endDate });
  const formattedDuration = formatDuration(duration, { format: ['years', 'months'], locale: ptBR });
  return formattedDuration;
}
