import { SectionTitle } from "@/components/SectionTitle"
import { KnownTech } from "./Known-Tech"
import { TbBrandAngular, TbBrandBootstrap, TbBrandCSharp, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandNodejs, TbBrandPrisma, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb"

export const KnownTechs = () => {
  return (
    <section id="known-techs" className="container pt-32">
      <SectionTitle className="mb-16" title="Habilidades" subtitle="principais"></SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] mt-6 gap-3">
        <KnownTech tech={{
          icon: <TbBrandJavascript />,
          name: "Javascript",
          startDate: new Date(2022, 8, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandReact />,
          name: "React.js",
          startDate: new Date(2023, 7, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandNextjs />,
          name: "Next.js",
          startDate: new Date(2023, 6, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandAngular />,
          name: "Angular.js",
          startDate: new Date(2023, 3, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandTypescript />,
          name: "Typescript",
          startDate: new Date(2023, 4, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandNodejs />,
          name: "Node.js",
          startDate: new Date(2023, 10, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandTailwind />,
          name: "TailwindCSS",
          startDate: new Date(2023, 2, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandPrisma />,
          name: "ORM",
          startDate: new Date(2023, 7, 10)
        }} />
        <KnownTech tech={{
          icon: <TbBrandMysql />,
          name: "SQL",
          startDate: new Date(2023, 5, 10)
        }} />
      </div>
    </section>
  )
}