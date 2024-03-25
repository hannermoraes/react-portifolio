import { TechBadge } from '@/components/TechBadge/TechBadge'
import Image from 'next/image'
import { BiLogoGithub, BiWorld } from 'react-icons/bi';
import Link from 'next/link';
import { StatusProjectOn } from '@/components/StatusProject/StatusProject';
import { Button } from '@/components/ui/button';
import { HorizontalDivider } from '@/components/HorizontalDivider';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  imageURL: string,
  imageALT: string,
  title: string,
  description: string,
  technologies: string[],
  githubLink: string,
  projectLink: string,
}

export const ProjectCard = ({ imageURL, imageALT, title, description, technologies, githubLink, projectLink }: ProjectCardProps) => {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row justify-around xl:justify-center xl:gap-8' >
      <div className='lg:items-center sm:items-start md:items-start flex flex-col transition-all group'>
        {/* Title and status */}
        <div className='w-full flex flex-col md:flex md:flex-row lg:flex-row justify-between'>
          <h1 className='flex items-center gap-3 font-extrabold text-xl font-geist subpixel-antialiased p-2'>
            {title}
          </h1>
        </div>
        <div className='w-full lg:h-full md:h-full flex items-center '>
          <Image
            className='w-full h-72 lg:h-[350px] md:h-[290px] object-cover object-left-top aspect-square rounded-md border-2 opacity-90 group-hover:opacity-100 transition-all bg-no-repeat'
            src={imageURL}
            alt={imageALT}
            width={520}
            height={480}
            unoptimized
          />
        </div>
      </div>
      <div className='basis-2/4'>
        <div>
          <p className='w-full mt-10 my-6 text-sm font-light font-kanit subpixel-antialiased lg:mt-16 text-pretty xl:h-full xl:mt-16'>
            {description}
          </p>

        </div>
        <div className='flex flex-col'>
          <div className='flex gap-x-1.5 flex-wrap mb-3 lg:max-w-[500px]'>
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>

          <div className='flex gap-4 font-kanit mb-6 items-center'>
            <div>
              <Button variant={'default'} size={'buttonlow'}>
                <Link
                  target='_blank'
                  href={projectLink}
                  className='text-xs flex items-center'
                >
                  <BiWorld className='w-3 h-3 mr-1' />
                  Deploy
                </Link>
              </Button>
            </div>
            <div>
              <Button variant={'default'} size={'buttonlow'}>
                <Link
                  target='_blank'
                  href={githubLink}
                  className='text-xs flex items-center'>
                  <BiLogoGithub className='w-3 h-3 mr-1' />
                  Github
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}