/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import EducationSection from "@/components/section/education-section";
import CertificationsSection from "@/components/section/certifications-section";
import { ArrowUpRight, MapPinIcon, FileTextIcon } from "lucide-react";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`hi, i'm akkshay 👋`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="size-4" />
                    <span>Bangalore / Chennai</span>
                  </div>
                  <div className="hidden sm:block text-muted/30">•</div>
                  <div className="flex items-center gap-4">
                    <Link href={DATA.contact.social.GitHub.url} target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      <Icons.github className="size-4" />
                      <span>GitHub</span>
                    </Link>
                    <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      <Icons.linkedin className="size-4" />
                      <span>LinkedIn</span>
                    </Link>
                    <Link href={DATA.navbar.find(n => n.label === "Resume")?.href || "/Akkshay-Resume.pdf"} target="_blank" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      <FileTextIcon className="size-4" />
                      <span>Resume</span>
                    </Link>
                  </div>
                </div>
              </BlurFade>
              {"intro" in DATA && DATA.intro && (
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <div className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert md:text-base">
                    <Markdown>{DATA.intro}</Markdown>
                  </div>
                </BlurFade>
              )}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 shrink-0">
              <img
                alt={DATA.name}
                src={DATA.avatarUrl?.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${DATA.avatarUrl}` : DATA.avatarUrl}
                className="w-32 md:w-48 h-auto object-cover rounded-xl shadow-lg ring-4 ring-muted"
              />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <EducationSection />
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-6">
            {DATA.skills.map((skillGroup: any, id) => (
              <div key={skillGroup.category} className="flex flex-col gap-2">
                <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.1}>
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill: any, idx: number) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.1 + idx * 0.05}>
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="certifications">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <CertificationsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
