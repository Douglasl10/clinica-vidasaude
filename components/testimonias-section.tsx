import { Star } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const testimonials = [
    {
        name: "Maria Silva",
        role: "Paciente desde 2021",
        content: "Atendimento excepcional! A equipe é muito atenciosa e o ambiente da clinica transmite muita confiança. Recomendo a todos.",
        rating: 5
    },
    {
        name: "Jose Oliveira",
        role: "Paciente desde 2018",
        content: "Consegui agendar minha consulta pelo site em menos de 2 minutos. O doutor foi muito atencioso e explicou tudo com calma.",
        rating: 5
    },
    {
        name: "Ana Rodrigues da Silva",
        role: "Paciente desde 2023",
        content: "Levo toda minha familia para a VidaSaude. Os pediatras sao incriveis com as criancas e a estrutura e muito moderna.",
        rating: 4
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-secondary/50" id="depoimentos">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Depoimentos
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        O que nossos pacientes dizem
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        A satisfação dos nossos pacientes e nossa maior conquista.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="border-border/50">
                            <CardContent className="flex flex-col gap-4 p-6">
                                <div className="flex gap-1">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star className="h-4 w-4 fill-primary text-primary" key={i} />
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {'"'}
                                    {testimonial.content}
                                    {'"'}
                                </p>

                                <div className="mt-auto flex items-center gap-3 pt-2 border-t border-border">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-card-foreground">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}