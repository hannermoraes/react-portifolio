"use client"

import { SectionTitle } from "@/components/SectionTitle"
import { KnownTech } from "./Known-Tech"
import { TbBrandAngular, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandNodejs, TbBrandPrisma, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb"
import { motion } from "framer-motion"

export const KnownTechs = () => {
  const techs = [
    {
      icon: <TbBrandJavascript />,
      name: "Javascript",
      startDate: new Date(2022, 8, 10)
    },
    {
      icon: <TbBrandReact />,
      name: "React.js",
      startDate: new Date(2023, 7, 10)
    },
    {
      icon: <TbBrandNextjs />,
      name: "Next.js",
      startDate: new Date(2023, 6, 10)
    },
    {
      icon: <TbBrandAngular />,
      name: "Angular.js",
      startDate: new Date(2023, 3, 10)
    },
    {
      icon: <TbBrandTypescript />,
      name: "Typescript",
      startDate: new Date(2023, 4, 10)
    },
    {
      icon: <TbBrandNodejs />,
      name: "Node.js",
      startDate: new Date(2023, 10, 10)
    },
    {
      icon: <TbBrandTailwind />,
      name: "TailwindCSS",
      startDate: new Date(2023, 2, 10)
    },
    {
      icon: <TbBrandPrisma />,
      name: "ORM",
      startDate: new Date(2023, 7, 10)
    },
    {
      icon: <TbBrandMysql />,
      name: "SQL",
      startDate: new Date(2023, 5, 10)
    }
  ]

  return (
    <section id="known-techs" className="container pt-32">
      <SectionTitle className="mb-16" title="Habilidades" subtitle="principais"></SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] mt-6 gap-3">
        {techs.map((tech, index) => (
          <motion.div key={`know-tech-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}