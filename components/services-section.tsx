import { Baby, Bone, Brain, Eye, HeartPulse, Stethoscope } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
    {
        icon: Stethoscope,
        title: "Clinica Geral",
        description: "Consultas de rotina, check-ups completos e acompanhamento preventivo para toda a familia.",
    }, 
    {
        icon: HeartPulse,
        title: "Cardiologia",
        description: "Exames cardiologicos avançados, eletrocardiograma e acompanhamento personalizado.",
    }, 
    {
        icon: Brain,
        title: "Neurologia",
        description: "Diagnostico e tratamento de disturbios neurologicos com equipe altamente qualificado.",
    }, 
    {
        icon: Bone,
        title: "Ortopedia",
        description: "Cuidados com ossos, articulações e musculos. Reabilitação e tratamento modernos.",
    },
    {
        icon: Eye,
        title: "Oftalmologia",
        description: "Exames de vista completos, cirurgias e tratamento para saude ocular.",
    },
    {
        icon: Baby,
        title: "Pediatria",
        description: "Cuidado especial para crianças e adolescentes com profissionais dedicados.",
    }, 

]

export function ServicesSection() {
    return (
        <section id="servicos" className="py-24 bg-secondary/50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Nossos Serviços
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Especialidades medicas para cuidar de você
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        Contamos com uma equipe multidisciplinar pronta para oferecer o melhor atendimento em diversas areas da medicina
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">    
                    {services.map((service) => (
                        <Card key={service.title} className="group border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                            <CardContent className="flex flex-col gap-4 p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                    <service.icon className="h-6 w-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold text-card-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}