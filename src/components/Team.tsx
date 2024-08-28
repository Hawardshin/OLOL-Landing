import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import seoyeon from "@/assets/seoyeon.png";
import youjin from "@/assets/youjin.png";
import ubin from "@/assets/ubin.png";
import jung from "@/assets/jung.png";
import joungeun from "@/assets/joungeun.png";
interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: seoyeon,
    name: "장세연",
    position: "Team Lead & Android Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "GitHubLogoIcon",
        url: "https://www.instagram.com/",
      }
    ],
  },
  {
    imageUrl: youjin,
    name: "피유진",
    position: "Android Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "GitHubLogoIcon",
        url: "https://www.instagram.com/",
      }
    ],
  },
  {
    imageUrl: ubin,
    name: "김유빈",
    position: "BackEnd Developer & Infra Engineer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "GitHubLogoIcon",
        url: "https://www.instagram.com/",
      }
    ],
  },
  {
    imageUrl: joungeun,
    name: "신중은",
    position: "FrontEnd & Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "GitHubLogoIcon",
        url: "https://www.instagram.com/",
      }
    ],
  },
  {
    imageUrl: jung,
    name: "염정",
    position: "Backend Developer & AI/Data Engineer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "GitHubLogoIcon",
        url: "https://www.instagram.com/",
      }
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
      case "GitHubLogoIcon":
        return <GitHubLogoIcon size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          TechWave {" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        테크웨이브 팀 멤버들을 소개합니다.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
