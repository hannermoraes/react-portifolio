'use client'
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import ModeToggle from '../ModeToggle/ModeToggle';
import { motion } from 'framer-motion';

export function Header() {
  const { theme, resolvedTheme } = useTheme();
  const [logo, setLogo] = useState('/light-logo.png');
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (theme === 'system') {
      setLogo(resolvedTheme === 'dark' ? '/dark-logo.png' : '/light-logo.png');
    } else {
      setLogo(theme === 'dark' ? '/dark-logo.png' : '/light-logo.png');
    }
  }, [theme, resolvedTheme]);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='px-4 md:px-14 lg:px-14'>
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='flex pt-2 justify-between'>
        <div>
          <Link href='/'>
            <Button variant='ghost' size='icon'>
              <Image
                className='hover:animate-spin'
                src={logo}
                alt='Logo - Hanner Moraes'
                width={42}
                height={42}
              />
            </Button>
          </Link>
        </div>

        <div className='flex items-center'>
          <ul className='hidden md:flex justify-center items-center font-kanit'>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <div>
                <Button className='' size='default' variant='ghost' onClick={() => handleSmoothScroll('known-techs')}>
                  <span className='font-normal pr-0.5 text-blue-500'>#&nbsp;</span>Habilidades
                </Button>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
            >
              <div>
                <Button size='default' variant='ghost' onClick={() => handleSmoothScroll('projects')}>
                  <span className='font-normal pr-0.5 text-blue-500'>#&nbsp;</span>Projetos
                </Button>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            >
              <div>
                <Button size='default' variant='ghost' onClick={() => handleSmoothScroll('work-experience')} >
                  <span className='font-normal pr-0.5 text-blue-500'>#&nbsp;</span>Experiências
                </Button>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className='ml-4'>
                <ModeToggle />
              </div>
            </motion.li>
          </ul>

          <div className='ml-4 md:hidden'>
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {navbar ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className={`md:hidden flex-col fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white dark:bg-background z-20 ${navbar ? 'flex' : 'hidden'}`}>
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-12 top-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {navbar ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            <ul className="w-full h-full flex flex-col justify-center gap-28 items-center font-kanit">
              <li>
                <Button
                  className='text-2xl'
                  size='default'
                  variant='ghost'
                  onClick={() => {
                    handleSmoothScroll('known-techs');
                    setNavbar(false);
                  }}
                >
                  <span className='font-normal text-blue-500'>#&nbsp;</span>Habilidades
                </Button>
              </li>
              <li>
                <Button
                  className='text-2xl'
                  size='default'
                  variant='ghost'
                  onClick={() => {
                    handleSmoothScroll('projects');
                    setNavbar(false);
                  }}
                >
                  <span className='font-normal text-blue-500'>#&nbsp;</span>Projetos
                </Button>
              </li>
              <li>
                <Button
                  className='text-2xl'
                  size='default'
                  variant='ghost'
                  onClick={() => {
                    handleSmoothScroll('work-experience');
                    setNavbar(false);
                  }}
                >
                  <span className='font-normal text-blue-500'>#&nbsp;</span>Experiências
                </Button>
              </li>
              <li>
                <div className='mt-4 ml-4 flex flex-col items-center'>
                  <p className='font-kanit font-bold mb-3'>Alterar Tema</p>
                  <ModeToggle />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
