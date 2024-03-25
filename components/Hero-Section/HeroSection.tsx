'use client'

import Link from 'next/link';
import { FileTextIcon } from '@radix-ui/react-icons';
import { TechBadge } from '@/components/TechBadge/TechBadge';
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { Button } from '../ui/button';
import { TypewriterEffectDemo } from '../TypewriterEffect';


// Informações de Contato
const MOCK_CONTACTS = [
  {
    url: 'https://github.com/hannermoraes',
    icon: <BiLogoGithub className='w-5 h-5' />
  },
  {
    url: 'https://www.linkedin.com/in/hannermoraes/',
    icon: <BiLogoLinkedin className='w-5 h-5' />
  },
  {
    url: 'mailto:hannermoraes@gmail.com',
    icon: <BiLogoGmail className='w-5 h-5' />
  },
  {
    url: 'https://wa.me/5521992874247',
    icon: <BiLogoWhatsapp className='w-5 h-5' />
  }
]

const MOCK_TECHS = [
  {
    name: 'Javascript'
  },
  {
    name: 'React.js'
  },
  {
    name: 'Next.js'
  },
  {
    name: 'Typescript'
  },
  {
    name: 'Angular.js'
  },
  {
    name: 'Node.js'
  },
  {
    name: 'ORM'
  },
  {
    name: 'Tailwind'
  }
]

export const HeroSection = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center pt-28 pb-24 lg:flex-row'>

      <div className='justify-center items-center flex md:flex-row lg:flex-row'>

        {/* Side Menu*/}
        <div className='w-[90px] h-full justify-center flex flex-col items-start gap-6'>
          {
            MOCK_CONTACTS.map((contact, index) => (
              <div key={`contact-${index}`} className='transition duration-300 ease-out hover:scale-110 hover:text-blue-500'>
                <Link href={contact.url} target='_blank'>
                  {contact.icon}
                </Link>
              </div>
            ))
          }
        </div >

        {/* Title and Description */}
        < div className='flex flex-col' >

          <div className='max-w-64'>
            <h1 className="font-geist antialiased font-extrabold text-6xl tracking-tighter">hanner</h1>
            <span className="font-geist float-right antialiased font-bold text-6xl tracking-tighter">moraes
              <span className='font-extrabold text-5xl text-blue-500 '> .</span>
            </span>
          </div>

          <div className='flex items-center ml-4'>
            <TypewriterEffectDemo />
          </div>

          <div className="flex">

            <div className='text-sm antialiased max-w-[520px] text-wrap font-geist'>
              Apaixonado por desafios, tecnologia, viagens e autodesenvolvimento.
              Possuo cerca de <span className="font-semibold text-blue-600">2 anos de estudos </span>em desenvolvimento frontend, também tenho experiência como
              <span className="font-semibold text-blue-600"> desenvolvedor de software </span> e <span className="font-semibold text-blue-600">analista de ti</span>.
              Sigo em busca de continuar trilhando um belo caminho na área de tecnologia e desenvolvimento. <br />
            </div>

          </div >

          {/* TechBadge Info */}
          <div className='flex flex-row flex-wrap gap-x-1 lg:w-[460px] mt-5'>

            {
              MOCK_TECHS.map((tech, index) => (
                <div key={`tech-${index}`}>
                  <TechBadge name={tech.name} />
                </div>
              ))
            }
          </div>

          {/* Button CV / Badge  */}
          <div className='mt-2'>
            <Link href={'/curriculo.pdf'} target='_blank'>
              <Button type="button" size={'sm'} variant={'default'} className='rounded-lg shadow-md text-xs hover:shadow-lg'>
                <FileTextIcon className="mr-2 h-4 w-4" />Visualizar CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}

