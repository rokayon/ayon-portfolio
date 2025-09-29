"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Socials from "./Socials";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "AI & Computer Vision Researcher | ML & DL Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 lg:mt-0 mt-24">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-balance animate-fade-in-up">
              Rokonozzaman <span className="text-primary">Ayon</span>
            </h1>
            <p className="text-xl text-muted-foreground min-h-[1.75rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-base text-muted-foreground leading-relaxed animate-fade-in-up delay-500">
               I’m a researcher passionate about ML, DL, computer vision, and biomedical engineering, creating innovative models for medical diagnostics and disease detection while exploring XAI, segmentation, and ensemble learning to advance science.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-fade-in-up delay-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:abdullahalrahat4261@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                rokayon.cse@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+8801846229653</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>7 No Road, Mirpur 1, Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="flex gap-4 animate-fade-in-up delay-1000">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rokayon.cse@gmail.com&su=Let's%20Connect&body=Hi%20Mr. Ayon,"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
          </div>

          <Socials />
        </div>

        <div className="animate-fade-in-up delay-300">
          <Image
            src={"/ayon.png"}
            alt="ayon"
            height={500}
            width={500}
            className="hero-avatar rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
