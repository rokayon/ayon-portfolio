import { Github, Linkedin, Mail } from "lucide-react";

// Custom ORCID Icon Component
const OrcidIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.706-1.906 3.706-3.722 0-2.016-1.284-3.722-3.706-3.722h-2.297z"/>
  </svg>
);

const Socials = () => {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/rokayon",
      icon: <Github size={24} />,
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0000-3602-0714",
      icon: <OrcidIcon size={24} />,
    },
    {
      label: "LinkedIn",
      href: "www.linkedin.com/in/rokonozzaman-ayon",
      icon: <Linkedin size={24} />,
    },
    {
      label: "Mail",
      href: "mailto:rokayon.cse@gmail.com",
      icon: <Mail size={24} />,
    },
  ];

  return (
    <div className="flex gap-4 animate-fade-in-up delay-1200">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target={social.label === "Mail" ? "_self" : "_blank"} // open mail in same tab
          rel={social.label === "Mail" ? "" : "noopener noreferrer"}
          className="p-2 rounded-xl hover:bg-primary hover:text-white dark:hover:bg-gray-800 transition"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
