"use client"

import { CalendarDays, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"

const specialties = [
    "Cardiologia",
    "Neurologia",
    "Pediatria",
    "Clinica Geral",
    "Ortopedia",
    "Oftalmologia",
]

export function AppointmentForm() {
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="agendamento" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
                    <div className="flex flex-col gap-6">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Agendamento
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Agende sua consulta de forma rapida e simples
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Preencha o formulario ao lado e nossa equipe entrara em contato para confirmar o melhor horario para você. Atendemos de segunda a sabado, das 7h as 19h.
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                                <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Horario de Atendimento
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Segunda a Sexta: 7h - 19h | Sabado: 8h - 13h
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        Confirmacao Rapida
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Retornamos em ate 2 horas uteis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="border-border/50 shadow-lg">
                        <CardContent className="p-6 lg:p-8">
                            {submitted ? (
                                <div className="flex flex-col items-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                        <CheckCircle2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-card-foreground">
                                        Agendamento Enviado!
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-sm">
                                        Recebemos sua solicitação. Nossa equipe entrara em contato em breve para confirmar o horario da sua consulta.
                                    </p>
                                    <Button className="mt-4" variant="outline" onClick={() => setSubmitted(false)}>
                                        Fazer Novo Agendamento
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <h3 className="text-lg font-bold text-card-foreground">
                                        Preencha seus dados
                                    </h3>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="name">Nome Completo</Label>
                                            <Input id="name" placeholder="Seu nome" required></Input>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="phone">Telefone</Label>
                                            <Input id="phone" placeholder="(11) 99999-9999" required type="tel"></Input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="seu@email.com" required type="email"></Input>
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="specialty">
                                                Especialidade
                                            </Label>
                                            <Select required>
                                                <SelectTrigger id="specialty">
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        specialties.map((s) => (
                                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="date">Data</Label>
                                            <Input id="date" type="date" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="message">
                                            Observação{" "}
                                            <span className="text-muted-foreground">(opcional)</span>
                                        </Label>
                                        <Textarea id="message" placeholder="Descreva brevemente o motivo da consulta..." rows={3}></Textarea>
                                    </div>
                                    <Button type="submit" size="lg" className="mt-2 w-full">Confirma Agendamento</Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}