import Link from "next/link"
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi"
import { Button } from "../ui/button"

export const Footer = () => {

  const MOCK_CONTACTS = [
    {
      url: 'https://github.com/hannermoraes',
      icon: <BiLogoGithub className='w-6 h-6' />
    },
    {
      url: 'https://www.linkedin.com/in/hannermoraes/',
      icon: <BiLogoLinkedin className='w-6 h-6' />
    },
    {
      url: 'mailto:hannermoraes@gmail.com',
      icon: <BiLogoGmail className='w-6 h-6' />
    },
    {
      url: 'https://wa.me/5521992874247',
      icon: <BiLogoWhatsapp className='w-6 h-6' />
    }
  ]

  return (
    <footer className='grid justify-center items-center p-7 border-none gap-8 border rounded-t-2xl mt-28 '>
      <div className="flex items center justify-center sm:gap-1">
        {
          MOCK_CONTACTS.map((contact, index) => (
            <div key={`contact-${index}`} className='duration-300 ease-out hover:scale-110 hover:motion-reduce:animate-bounce'>
              <Button size='default' variant='ghost' className="hover:text-blue-500" >
                <Link href={contact.url} target='_blank'>
                  {contact.icon}
                </Link>
              </Button>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col justify-center items-center pb-3 sm:text-xs">
        <p className="text-xs">© Copyright 2024</p>
        <p className="text-sm">Direitos reservados -&nbsp;
          <Link
            className="animate-pulse text-blue-500 text-xs sm:text-sm"
            href='https://www.linkedin.com/in/hannermoraes/' >
            @hannermoraes
          </Link>
        </p>
      </div>
    </footer >
  )
}