import { SectionTitle } from "@/components/SectionTitle"
import { ExperienceItem } from "./ExperienceItem"

export const WorkExperience = () => {


  const startDate1 = new Date('2015-11-20')
  const endDate1 = new Date('2018-04-15')

  const startDate2 = new Date('2023-07-09')
  const endDate2 = new Date('2023-12-22')

  return (
    <section id="work-experience" className="container pt-32 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle title={"Experiência Profissional"} subtitle={"experiências"} />
        <div>
          <p className="text-foreground text-xs font-geist mt-2">
            Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem
          imageLogo={"/logo-ammarhes.svg"}
          imageLogoAlt={"Logo da empresa Ammarhes QSMS"}
          company={"Ammarhes QSMS"}
          job={"Desenvolvedor de Software"}
          description={"Trabalhei diretamente com ASP Classic, SQL Server, Javascript e C#, contribuindo para a implementação e manutenção do sistema proprietário da empresa. Fui responsável pela entrega de funcionalidades e pelo funcionamento do sistema. Além disso, participei ativamente do desenvolvimento frontend, criando interfaces visuais atrativas para sites e landing pages, e contribuí para a modernização da aparência do sistema."}
          startDate={startDate2}
          endDate={endDate2}
          technologies={['ASP Classic', 'C#', 'JQuery', 'Javascript', 'Bootstrap', 'MySQL', 'SQL Server']}
        />
        <ExperienceItem
          imageLogo={"/logo-sonda.svg"}
          imageLogoAlt={"Logo da empresa Sonda IT"}
          company={"Sonda ProckWork"}
          job={"Analista de TI"}
          description={"Realizava suporte estratégico a fornecedores e compradores, gerenciando principalmente a utilização do portal de compras e contratações. Assim também contribuindo ativamente para otimização e melhorias do sistema e condizia treinamentos aos colaboradores periodicamente."}
          technologies={['Windows Server', 'Linux', 'SAP', 'Hyper-V', 'VirtualBox', 'Docker', 'Redes', 'Apache']}
          startDate={startDate1}
          endDate={endDate1}
        />


      </div>
    </section>
  )
}