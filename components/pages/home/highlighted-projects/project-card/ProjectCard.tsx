"use client"

import { TechBadge } from '@/components/TechBadge/TechBadge'
import Image from 'next/image'
import { BiLogoGithub, BiWorld } from 'react-icons/bi';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaProjectDiagram } from "react-icons/fa";
import { motion } from 'framer-motion';

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
  const animationProps = {
    initial: {
      opacity: 0, scale: 0
    },
    whileInView: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}

      className="rounded-3xl lg:pb-6 py-2 w-full justify-center dark:border-t-2 border-t-4 bg-gradient-to-b 
    from-neutral-100/0 to-neutral-300/20 dark:from-neutral-900/0 dark:to-neutral-900/20 dark:border-neutral-300/30 mb-20">
      <div className='flex flex-col lg:flex-row justify-around xl: xl:gap-6' >
        <div className='lg:items-center sm:items-start md:items-start flex flex-col transition-all group'>
          {/* Title and status */}
          <div className='w-full flex flex-col md:flex md:flex-row lg:flex-row justify-between'>
            <div className='flex items-center px-5 pb-1 lg:ml-8'>
              <FaProjectDiagram size={18} />
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}

                className='flex items-center gap-3 font-extrabold text-xl font-geist subpixel-antialiased p-2 px-4'>
                {title}
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='w-full lg:h-full md:h-full flex items-center justify-center px-6'>
            <Image
              className='max-w-fit-[320px] h-[240px] md:h-[290px] md:w-[580px] lg:w-[340px] lg:h-[365px] lg:ml-10 object-cover object-left-top aspect-square rounded-md border-2 opacity-95 group-hover:opacity-100 transition-all bg-no-repeat'
              src={imageURL}
              alt={imageALT}
              width={520}
              height={480}
              unoptimized
            />
          </motion.div>
        </div>
        <div className='basis-2/4 lg:basis-3/5 lg:px-10 px-6'>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className='w-full mt-4 my-6 text-sm font-normal dark:font-extralight font-geist text-justify  subpixel-antialiased lg:mt-16 xl:h-full xl:mt-16'>
              {description}
            </p>

          </motion.div>
          <div className='flex flex-col justify-center'>
            <div className='flex gap-x-1.5 flex-wrap mb-3 lg:max-w-[500px] items-center'>
              {technologies.map((tech, index) => (
                <div key={`tech-project-${index}`} >
                  <TechBadge name={tech}
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.1, delay: index * 0.1, ease: 'linear' }}
                  />
                </div>
              ))}
            </div>

            <div className='flex gap-4 font-kanit mb-6 items-center lg:justify-start justify-center mt-2'>
              <motion.div
                {...animationProps}
                transition={{ duration: 0.5 }}
              >
                <Button variant={'default'} size={'buttonlow'} className='opacity-90'>
                  <Link
                    target='_blank'
                    href={projectLink}
                    className='text-xs flex items-center'
                  >
                    <BiWorld className='w-3 h-3 mr-1' />
                    Deploy
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                {...animationProps}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button variant={'default'} size={'buttonlow'} className='opacity-90'>
                  <Link
                    target='_blank'
                    href={githubLink}
                    className='text-xs flex items-center'>
                    <BiLogoGithub className='w-3 h-3 mr-1' />
                    Github
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div >
    </motion.div >
  )
}