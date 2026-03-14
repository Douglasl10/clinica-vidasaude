"use client"

import { Menu, Phone, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { isAbsolute } from "node:path/posix"

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
            <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
                <a className="flex items-center gap-2" href="#inicio">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <span className="text-lg font-bold text-primary-foreground">
                            V
                        </span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Vida&Saude
                    </span>
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {
                        navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <a href="tel:+5511999999999" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        (11) 99999-9999
                    </a>
                    <Button asChild>
                        <a href="#agendamento">
                            Agendar Consulta
                        </a>
                    </Button>
                </div>

                <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
                    {
                        isOpen ? <X className="h-6 w-6" /> : <Menu className="w-6 h-6" />
                    }
                </button>
            </nav>
            {
                isOpen && (
                    <div className="md:hidden bg-card border-b border-border px-6 pb-6">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-col gap-3">
                            <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                (11) 99999-9999
                            </a>
                            <Button asChild className="ww-full">
                                <a href="#agendamento" onClick={() => setIsOpen(false)}>
                                    Agendar Consultar
                                </a>
                            </Button>
                        </div>
                    </div>
                )
            }
        </header>
    )
}