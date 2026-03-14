import { Clock, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer id="contato" className="bg-foreground text-background">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                                <span className="text-sm font-bold text-primary-foreground">
                                    V
                                </span>
                            </div>
                            <span className="text-lg font-bold">
                                Vida&Saude
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-70">
                            Cuidando da saude de toda sua familia com dedicacao,
                            tecnologia e atendimento humanizado.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Links Rapidos
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {["Inicio", "Serviço", "Sobre", "Depoimentos"].map((link) => (
                                <li key={link}>
                                    <a className="text-sm opacity-70 hover:opacity-100 transition-opacity" href={`#${link.toLocaleLowerCase()}`}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Especialidade
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Clinica Geral",
                                "Cardiologia",
                                "Neurologia",
                                "Ortopedia",
                                "Oftalmologia",
                                "Pediatria"
                            ].map((s) => (
                                <li key={s} className="text-sm opacity-70">
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Contato
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70"/>
                                <span className="text-sm opacity-70">
                                    Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                                </span>
                            </li>
                            <li  className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0 opacity-70"/>
                                <span className="text-sm opacity-70">
                                    contato@eemail.com.br
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="w-4 h-4 shrink-0 opacity-70"/>
                                <span className="text-sm opacity-70">
                                    Seg-Sex: 7h-19h | Sab: 8h-13h
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-background/10 pt-8 text-center">
                    <p className="text-sm opacity-50">
                        &copy; {new Date().getFullYear()} Vida&Saude Clinica Medica. Todos os direitos reservados por Douglas Oliveira.
                    </p>
                </div>
            </div>
        </footer>
    )
}