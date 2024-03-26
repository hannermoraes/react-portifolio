import { SectionTitle } from "@/components/SectionTitle"
import { ProjectCard } from "./project-card/ProjectCard"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HighlightedProjects = () => {
  return (
    <section id="projects" className="md:container lg:container xl:container 2xl:container pt-28">
      <SectionTitle className="mb-16 px-4 sm:px-0 md:px-0 lg:px-0 xl:px-0" title="Projetos" subtitle="destaques" />
      <div>

        <ProjectCard
          imageURL={"/barbershop.png"}
          imageALT={"MarketPlace de Barbearias - FSW Barber"}
          title={"Barbershop"}
          technologies={['Next.js', 'React.js', 'PostgreSQL', 'Shadcn-UI', 'Zod', 'Typescript', 'OAuth 2.0', 'Javascript', 'TailwindCSS', 'Vercel']}
          githubLink={"https://github.com/hannermoraes/react-barbershop"}
          projectLink={"https://react-barbershop-kappa.vercel.app/"}
          description={"O Barbershop é um marketplace para agrupar barbearias, proporcionando aos clientes uma plataforma intuitiva de agendamento. A plataforma oferece uma experiência completa, permitindo que os usuários encontrem facilmente barbearias de sua região, serviços oferecidos e seus valores. Os clientes podem agendar seus compromissos diretamente pelo site, garantindo uma experiência rápida e na palma da sua mão. Além disso o sistema conta com um acesso diretamente conectado com a sua conta google."}
        />
        <ProjectCard
          imageURL={"/routine.png"}
          imageALT={"Imagem do aplicativo Routine"}
          title={"Routine"}
          description={"Este é um aplicativo para controle e gerenciamento de seus hábitos diários. Ainda esta fase de desenvolvimento, porém, nele é possível criar rotinas, ter a visualização dos seus ultimos 7 dias de cada rotina, acessar o calendário para ter informações dos demais dias e ter todo esse controle dos seus hábitos na tela inicial. "}
          technologies={['Next.js', 'React.js', 'Vercel KV', 'Shadcn-UI', 'Typescript', 'Javascript', 'TailwindCSS']}
          githubLink={"https://github.com/hannermoraes/react-routine"}
          projectLink={"https://react-routine.vercel.app/"}
        />

        <div className="flex flex-row items-center mt-8">
          <div className="gap-1.5">
            <p className="text-gray-400 text-sm">Se interessou?</p>
          </div>
          <div>
            <Button variant='link' size='sm' >
              <Link className="flex text-sm text-blue-400 group mt-1 ml-2" href={"https://github.com/hannermoraes?tab=repositories"} target="_blank">
                ver todos
                <HiArrowNarrowRight className='h-6 ml-2 group-hover:animate-arrow' />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}