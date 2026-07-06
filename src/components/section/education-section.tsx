"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src?.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}` : src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function EducationSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.education.map((edu) => (
        <AccordionItem
          key={edu.school}
          value={edu.school}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className={cn("hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden", !edu.description && "cursor-default pointer-events-none")}>
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={edu.logoUrl || ""} alt={edu.school} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {edu.school}
                    {edu.description && (
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    )}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {edu.degree}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {edu.start} - {edu.end}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          {((edu as any).description || (edu as any).clubs) && (
            <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
              {(edu as any).clubs && (edu as any).clubs.length > 0 && (
                <div className="flex flex-col gap-6 mb-6 mt-4">
                  {(edu as any).clubs.map((club: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                      <LogoImage src={club.logo} alt={club.organization} />
                      <div className="flex flex-col min-w-0">
                        {club.title && <span className="font-semibold text-foreground text-base leading-snug">{club.title}</span>}
                        <span className={cn(club.title ? "text-sm text-foreground" : "font-semibold text-foreground text-base leading-snug")}>{club.organization}</span>
                        <span className="text-sm text-muted-foreground mt-0.5">{club.dates}</span>
                        {club.roles && club.roles.length > 0 && (
                          <div className="mt-3 flex flex-col gap-4 relative before:absolute before:top-2 before:bottom-2 before:left-[-27px] before:w-[2px] before:bg-border">
                            {club.roles.map((role: any, ridx: number) => (
                              <div key={ridx} className="flex flex-col relative before:absolute before:top-[10px] before:left-[-27px] before:w-[12px] before:h-[2px] before:bg-border">
                                <span className="font-semibold text-foreground text-sm leading-snug">{role.title}</span>
                                <span className="text-sm text-muted-foreground mt-0.5">{role.dates}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {(edu as any).description && (
                <div className="prose dark:prose-invert">
                  <Markdown>{(edu as any).description}</Markdown>
                </div>
              )}
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
