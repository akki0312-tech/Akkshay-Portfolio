/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Building under pressure</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              From competitive hackathons to internship work and independent builds,
              I focus on shipping practical software with strong engineering fundamentals.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => (
            <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-6 md:gap-10">
              <TimelineConnectItem className="flex items-start justify-center pt-2">
                <div className="size-3 bg-muted z-10 shrink-0 overflow-hidden border-2 border-primary rounded-full ring-2 ring-border flex-none" />
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col sm:flex-row justify-between gap-4 min-w-0">
                <div className="flex flex-col justify-start gap-2 min-w-0 flex-1">
                  {hackathon.dates && (
                    <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                  )}
                  {hackathon.title && (
                    <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                  )}
                  {hackathon.location && (
                    <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                  )}
                  {hackathon.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                      {hackathon.description}
                    </p>
                  )}
                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {hackathon.links.map((link: any, idx) => (
                        <Link
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                            {link.icon}
                            {link.title}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {hackathon.image && (
                  <div className="shrink-0 flex-none self-start sm:self-center mt-2 sm:mt-0">
                    <img
                      src={hackathon.image.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${hackathon.image}` : hackathon.image}
                      alt={hackathon.title}
                      className="h-16 w-auto md:h-20 object-contain rounded-md border bg-card shadow-sm"
                    />
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
