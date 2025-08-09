"use client"

import Image from "next/image"
import Link from "next/link"
import { IBM_Plex_Serif, IBM_Plex_Mono } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronRight, Terminal, CircleIcon, GithubIcon, MapPin, Briefcase } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { MatrixRain } from "@/components/ui/matrix-rain"

const plexSerif = IBM_Plex_Serif({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "swap",
})

const plexMono = IBM_Plex_Mono({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
})

function SectionLabel({ children = "SECTION" }: { children?: string }) {
    return (
        <div className="pointer-events-none select-none">
            <div className="inline-flex items-center gap-2 rounded-sm border border-zinc-200 bg-white px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                <span className="inline-block h-2 w-2 rounded-[2px] bg-zinc-900" aria-hidden />
                {children}
            </div>
        </div>
    )
}

function Box({
    title = "",
    children,
    className,
}: {
    title?: string
    children?: React.ReactNode
    className?: string
}) {
    return (
        <section
            className={cn(
                "relative rounded-sm border border-zinc-200 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]",
                className
            )}
        >
            {title ? (
                <div className="absolute -top-3 left-3">
                    <SectionLabel>{title}</SectionLabel>
                </div>
            ) : null}
            <div className="p-6 md:p-8">{children}</div>
        </section>
    )
}

function MetaRow({
    label = "Label",
    value = "Value",
}: {
    label?: string
    value?: string | React.ReactNode
}) {
    return (
        <div className="grid grid-cols-[120px_1fr] gap-4 text-sm md:grid-cols-[160px_1fr]">
            <div className={cn("text-zinc-500", plexMono.className)}>{label}</div>
            <div className="text-zinc-900">{value}</div>
        </div>
    )
}

function GridBackground() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
                background:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 24px)",
            }}
        />
    )
}

function VerticalRails() {
    // Subtle vertical rails to give a system/boxy scaffold
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="mx-auto h-full w-full max-w-6xl px-4 md:px-6">
                <div className="relative h-full">
                    <div className="absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent md:block" />
                    <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent md:block" />
                    <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-100 to-transparent md:block" />
                </div>
            </div>
        </div>
    )
}

function DividerRow() {
    return <Separator className="my-6 bg-zinc-200" />
}

export default function Page() {
    const [year, setYear] = useState<number>(new Date().getFullYear())
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <main className="relative min-h-screen text-zinc-900 antialiased">
            <div className="fixed inset-0 z-0">
                <MatrixRain />
            </div>
            <div className="fixed inset-0 bg-white/90" />
            <GridBackground />
            <VerticalRails />
            <div className="relative z-20">
                <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
                        <div className={cn("text-sm tracking-[0.22em] text-zinc-700", plexMono.className)}>
                            Sangharsh.me
                        </div>
                        <nav className="hidden gap-6 text-sm md:flex">
                            <a href="#about" className="text-zinc-700 hover:text-zinc-900">
                                About
                            </a>
                            <a href="#work" className="text-zinc-700 hover:text-zinc-900">
                                Work
                            </a>
                            <a href="#projects" className="text-zinc-700 hover:text-zinc-900">
                                Projects
                            </a>
                            <a href="#contact" className="text-zinc-700 hover:text-zinc-900">
                                Contact
                            </a>
                        </nav>
                        <div className="flex items-center gap-2">
                            <Link aria-label="GitHub" href="https://github.com/sangharshseth">
                                <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-300">
                                    <GithubIcon className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link aria-label="LinkedIn" href="https://linkedin.com/in/sangharshseth">
                                <Button variant="outline" size="icon" className="h-8 w-8 border-zinc-300">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link aria-label="Email" href="mailto:sangharshbgh@gmail.com">
                                <Button size="sm" className="gap-2 bg-zinc-900 text-white hover:bg-black">
                                    <Mail className="h-4 w-4" />
                                    Email
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-12 md:gap-8 md:px-6 md:py-12">
                    {/* HERO */}
                    <div id="about" className="md:col-span-7">
                        <Box title="About">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h1 className={cn("text-3xl font-semibold leading-tight tracking-tight md:text-5xl", plexSerif.className)}>
                                        Sangharsh Seth
                                    </h1>
                                    <p className="mt-2 text-zinc-600">
                                        Senior Backend Engineer specializing in distributed systems, event-driven architectures, and scalable microservices. Experienced in building resilient systems with AWS, Node.js, and Go.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge variant="secondary" className={cn("rounded-sm border border-zinc-300 bg-white text-xs text-zinc-700", plexMono.className)}>
                                        Go
                                    </Badge>
                                    <Badge variant="secondary" className={cn("rounded-sm border border-zinc-300 bg-white text-xs text-zinc-700", plexMono.className)}>
                                        TypeScript
                                    </Badge>
                                    <Badge variant="secondary" className={cn("rounded-sm border border-zinc-300 bg-white text-xs text-zinc-700", plexMono.className)}>
                                        PostgreSQL
                                    </Badge>
                                    <Badge variant="secondary" className={cn("rounded-sm border border-zinc-300 bg-white text-xs text-zinc-700", plexMono.className)}>
                                        Redis
                                    </Badge>
                                    <Badge variant="secondary" className={cn("rounded-sm border border-zinc-300 bg-white text-xs text-zinc-700", plexMono.className)}>
                                        gRPC
                                    </Badge>
                                    <Badge variant="secondary" className={cn("rounded-sm border border-zinc-300 bg-white text-xs text-zinc-700", plexMono.className)}>
                                        Kubernetes
                                    </Badge>
                                </div>

                                <DividerRow />

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                                        <MapPin className="h-4 w-4" />
                                        <span>Bangalore, India</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                                        <Briefcase className="h-4 w-4" />
                                        <span>Senior Backend Engineer at Nagarro</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                                        <Mail className="h-4 w-4" />
                                        <Link className="hover:text-zinc-900 transition-colors" href="mailto:sangharshbgh@gmail.com">
                                            sangharshbgh@gmail.com
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                                        <GithubIcon className="h-4 w-4" />
                                        <Link className="hover:text-zinc-900 transition-colors" href="https://github.com/sangharshseth">
                                            github.com/sangharshseth
                                        </Link>
                                    </div>
                                </div>

                                <DividerRow />

                                <div className="flex flex-wrap gap-3">
                                    <Link href="/resume.pdf">
                                        <Button variant="outline" className="gap-2 border-zinc-300">
                                            <Download className="h-4 w-4" />
                                            Resume
                                        </Button>
                                    </Link>
                                    <Link href="#projects">
                                        <Button className="gap-2 bg-zinc-900 text-white hover:bg-black">
                                            View Projects
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Box>
                    </div>


                    <div className="md:col-span-5">
                        <Box title="Portrait">
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-sm border border-zinc-200">
                                    {/* Lines overlay to blend image and UI */}
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-60"
                                        style={{
                                            background:
                                                "repeating-linear-gradient(0deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 1px, transparent 1px, transparent 16px), repeating-linear-gradient(90deg, rgba(0,0,0,0.04), rgba(0,0,0,0.04) 1px, transparent 1px, transparent 16px)",
                                        }}
                                    />
                                    <Image
                                        src="/IMG.jpg"
                                        alt="Portrait of the backend engineer"
                                        width={900}
                                        height={680}
                                        className="h-auto w-full scale-[1.01] rounded-sm object-cover grayscale"
                                        priority
                                    />
                                </div>
                                <div className="mt-4 text-xs text-zinc-500">
                                    Tip: Replace the placeholder with your image for better impact. Neutral lighting works best with the grid overlay.
                                </div>
                            </div>
                        </Box>
                    </div>

                    {/* SKILLS / SYSTEMS */}
                    <div className="md:col-span-12">
                        <Box title="Systems I Build">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                                <div className="md:col-span-4">
                                    <div className="space-y-3">
                                        <div className={cn("text-sm uppercase tracking-[0.18em] text-zinc-600", plexMono.className)}>
                                            Core Competencies
                                        </div>
                                        <ul className="grid list-disc grid-cols-1 gap-2 pl-5 text-zinc-800 marker:text-zinc-400">
                                            <li>Service design, domain modeling, API design</li>
                                            <li>Throughput, latency, and resilience engineering</li>
                                            <li>Data modeling, indexing, consistency trade-offs</li>
                                            <li>Observability, SLOs, incident response</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:col-span-8">
                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                                        {[
                                            "C++",
                                            "TypeScript",
                                            "Python",
                                            "Golang",
                                            "Node.js",
                                            "NestJS",
                                            "AWS",
                                            "PostgreSQL",
                                            "MySQL",
                                            "RabbitMQ",
                                            "Docker",
                                            "Microservices",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className={cn(
                                                    "flex items-center justify-between rounded-sm border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
                                                )}
                                            >
                                                <span>{item}</span>
                                                <ChevronRight className="h-4 w-4 text-zinc-400" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>

                    {/* PROJECTS */}
                    <div id="projects" className="md:col-span-12">
                        <Box title="Selected Projects">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {[
                                    {
                                        name: "EventStream",
                                        summary:
                                            "High-throughput event ingestion with exactly-once processing, backpressure, and timeline replays.",
                                        stack: ["Go", "Kafka", "PostgreSQL"],
                                    },
                                    {
                                        name: "Keyforge",
                                        summary:
                                            "Feature flag & dynamic config service with audit trails and multi-tenant RBAC.",
                                        stack: ["TypeScript", "Redis", "gRPC"],
                                    },
                                    {
                                        name: "AtlasDB",
                                        summary:
                                            "Schema-migration framework with zero-downtime rollouts and change safety gates.",
                                        stack: ["Go", "PostgreSQL", "CI"],
                                    },
                                ].map((proj) => (
                                    <div key={proj.name} className="flex flex-col rounded-sm border border-zinc-200">
                                        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2">
                                            <div className={cn("text-sm font-medium", plexSerif.className)}>{proj.name}</div>
                                            <div className="flex gap-1">
                                                {proj.stack.map((s) => (
                                                    <Badge
                                                        key={s}
                                                        variant="secondary"
                                                        className={cn(
                                                            "rounded-sm border border-zinc-300 bg-white text-[11px] text-zinc-700",
                                                            plexMono.className
                                                        )}
                                                    >
                                                        {s}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col p-4">
                                            <p className="text-sm text-zinc-700">{proj.summary}</p>
                                            <div className="mt-auto pt-4 flex gap-2">
                                                <Link href={`https://github.com/sangharshseth/${proj.name.toLowerCase()}`}>
                                                    <Button variant="outline" size="sm" className="gap-2 border-zinc-300">
                                                        <Github className="h-4 w-4" />
                                                        Code
                                                    </Button>
                                                </Link>
                                                <Link href={`https://github.com/sangharshseth/${proj.name.toLowerCase()}#readme`}>
                                                    <Button size="sm" className="gap-2 bg-zinc-900 text-white hover:bg-black">
                                                        <Terminal className="h-4 w-4" />
                                                        Readme
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Box>
                    </div>

                    {/* EXPERIENCE */}
                    <div id="work" className="md:col-span-12">
                        <Box title="Experience">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="space-y-6">
                                    {[
                                        {
                                            role: "Associate Staff Engineer",
                                            org: "Nagarro",
                                            years: "2023 — Present",
                                            bullets: [
                                                "Led development of pTremor, improving system stability by 25%",
                                                "Architected event-driven microservices with RabbitMQ and NestJS",
                                                "Mentored 3 junior developers while maintaining 98% delivery rate"
                                            ],
                                        },
                                        {
                                            role: "Senior Backend Engineer",
                                            org: "Autovert Technologies",
                                            years: "2023",
                                            bullets: [
                                                "Implemented core product APIs using AWS Lambda and NodeJS",
                                                "Orchestrated product flow using AWS Step Functions",
                                                "Led CI/CD implementation using AWS CDK"
                                            ],
                                        },
                                        {
                                            role: "Backend Engineer",
                                            org: "Niveus Solutions",
                                            years: "2022",
                                            bullets: [
                                                "Built RESTful APIs in Golang using Gin framework",
                                                "Deployed microservices using GCP (GCR and GKE)",
                                                "Designed database schema for microservices migration"
                                            ],
                                        },
                                        {
                                            role: "Software Engineer",
                                            org: "Divami Design Labs",
                                            years: "2020 — 2021",
                                            bullets: [
                                                "Developed UI for Google CDAP pipeline using React",
                                                "Improved page load time by 25% through code refactoring",
                                                "Automated data migration saving 2 hours daily"
                                            ],
                                        }
                                    ].map((job) => (
                                        <div key={job.role} className="rounded-sm border border-zinc-200">
                                            <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2">
                                                <div className="font-medium">{job.role}</div>
                                                <div className={cn("text-xs text-zinc-600", plexMono.className)}>{job.years}</div>
                                            </div>
                                            <div className="p-4">
                                                <div className="text-sm text-zinc-700">{job.org}</div>
                                                <ul className="mt-2 grid list-disc gap-2 pl-5 text-sm text-zinc-800 marker:text-zinc-400">
                                                    {job.bullets.map((b) => (
                                                        <li key={b}>{b}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Code-ish Contact Card */}
                                <div className="rounded-sm border border-zinc-200">
                                    <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2">
                                        <div className={cn("text-sm", plexSerif.className)}>Contact Snippet</div>
                                    </div>
                                    <div className="p-4">
                                        <div
                                            className={cn(
                                                "rounded-sm border border-zinc-200 bg-white p-4 text-sm leading-relaxed text-zinc-800",
                                                plexMono.className
                                            )}
                                        >
                                            <div>{">{' '}curl --request POST \\"}</div>
                                            <div className="pl-4">
                                                {"https://contact.you/api/message \\"}
                                            </div>
                                            <div className="pl-4">{"--header 'Content-Type: application/json' \\"}</div>
                                            <div className="pl-4">
                                                {"--data '{"}{"{"}
                                                {'"name"'}{": "}{'"Your Name"'}{", "}{'"email"'}{": "}{'"you@example.com"'}{", "}
                                                {'"message"'}{": "}{'"Let’s build something resilient."'}
                                                {"}'}"}
                                            </div>
                                        </div>
                                        <div className="mt-3 text-xs text-zinc-600">
                                            Replace with your actual endpoint or keep it as a motif. It reinforces the backend-first identity.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>

                    {/* CONTACT */}
                    <div id="contact" className="md:col-span-12">
                        <Box title="Contact">
                            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className={cn("text-2xl font-semibold", plexSerif.className)}>Let’s make systems that endure.</h2>
                                    <p className="mt-1 max-w-xl text-zinc-600">
                                        I’m available for senior backend roles and selective consulting. Send a note and I’ll reply within 24 hours.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <Link href="mailto:sangharshbgh@gmail.com">
                                        <Button className="gap-2 bg-zinc-900 text-white hover:bg-black">
                                            <Mail className="h-4 w-4" />
                                            sangharshbgh@gmail.com
                                        </Button>
                                    </Link>
                                    <Link href="tel:+918018208166">
                                        <Button variant="outline" className="gap-2 border-zinc-300">
                                            <ArrowRight className="h-4 w-4" />
                                            +91 8018208166
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Box>
                    </div>

                    {/* FOOTER */}
                    <div className="md:col-span-12">
                        <div className="flex flex-col items-center justify-between gap-3 rounded-sm border border-zinc-200 bg-zinc-50 px-4 py-4 text-xs text-zinc-600 md:flex-row">
                            <div className={cn(plexMono.className)}>v{year}.0 — crafted with clear lines and fewer abstractions.</div>
                            <div className="flex items-center gap-3">
                                <Link href="#about" className="hover:text-zinc-900">
                                    About
                                </Link>
                                <Separator orientation="vertical" className="h-4 bg-zinc-300" />
                                <Link href="#projects" className="hover:text-zinc-900">
                                    Projects
                                </Link>
                                <Separator orientation="vertical" className="h-4 bg-zinc-300" />
                                <Link href="#contact" className="hover:text-zinc-900">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accessibility: skip-to-content anchor */}
                <a href="#about" className="sr-only">
                    Skip to content
                </a>
            </div>

        </main>
    )
}
