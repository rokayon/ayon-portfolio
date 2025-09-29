import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Socials from "./Socials";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Rokonozzaman Ayon</h3>
            <p className="text-muted-foreground">
              AI & Computer Vision Researcher | ML & DL Enthusiast
            </p>
          </div>

          <Socials />
          {/* <div className="flex gap-4">
            <Button size="icon" variant="ghost" asChild>
              <a href="#" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="mailto:abdullahalrahat4261@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div> */}
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Rokonozzaman Ayon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
