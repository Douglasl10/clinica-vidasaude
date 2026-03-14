import { CheckCircle } from "lucide-react"
import Image from "next/image"


const highlights = [
    "Mais de 15 anos de experiencia no mercado",
    "Equipamentos de ultima geracao",
    "Atendimento humanizado e personalizado",
    "Ambiente confortavel e acessivel",
    "Convenios com as principais operadoras",
    "Resultados de exames online",
]

export function AboutSection() {

    return (
        <section id="sobre" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <Image src="/image/doctor-team.jpg" alt="Clinica" width={800} height={600} className="object-cover w-full h-auto" />
                        </div>

                        <div className="absolute -bottom-4 -right-4 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                            <span className="text-2xl font-bold">
                                15+
                            </span>
                            <span className="text-xs text-center leading-tight">
                                Anos de experiencia
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Sobre nos
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Compromisso com a saude e o bem-estar de nossos pacientes
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            A VidaSaude nasceu com o proposito de transformar a experiencia de
                            cuidados medicos. Nossa equipe combina expertise clinica com
                            tecnologia avancada para oferecer diagnosticos precisos e
                            tratamentos eficazes.
                        </p>

                        <ul className="grid gap-3 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span className="text-sm text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}