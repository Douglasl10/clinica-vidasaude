import { ArrowBigRight, Clock, Heart, Shield } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
    { icon: Shield, label: "Profissionais Certificados", value: "50+" },
    { icon: Clock, label: "Atendimento Rapido", value: "24h" },
    { icon: Heart, label: "Pacientes Atendidos", value: "10k+" }
]

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20" id="inicio">
            <div className="mx-auto max-w-7xl w-full px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="incline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute incline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                <span className="relative incline-flex h-2 w-2 rounded-full bg-primary"/>
                            </span>
                            Agendamento Online Disponivel
                        </div>
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                            Sua saude merece o{" "}
                            <span className="text-primary">melhor cuidado</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-muted-foreground max-w-lg text-pretty">
                             Atendimento humanizado com tecnologia de ponta. Agende sua consulta
                            em segundos e cuide do que mais importa: sua saude e bem-estar.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild className="gap-2">
                                <a href="#agendamento">
                                    Agendar Agora
                                    <ArrowBigRight className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline">
                                <a href="#servicos">
                                    Conhecer Serviços
                                </a>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-4">
                            {
                                stats.map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <stat.icon className="h-5 w-5 text-primary"/>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-foreground">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <img  
                            src="/image/hero-clinic.jpg"
                            alt="Interno Clinica"
                            width={700}
                            height={500}
                            className="h-auto w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg border border-border">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Heart className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        98% de satisfação
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Avaliado pelos pacientes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}