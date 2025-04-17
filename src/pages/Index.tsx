import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/TypewriterEffect";
import { Download, Github, Linkedin, Code, Book, Guitar, Activity, Puzzle, Globe, Brain, GamepadIcon, Pen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackToTop } from "@/components/BackToTop";
import { BirdsBackground } from "@/components/BirdsBackground";

const Index = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/Sinchana_N_Resume.pdf";
    link.download = "Sinchana_N_Resume.pdf";
    link.click();
  };

  const aboutSections = [
    {
      title: "Programming Journey",
      icon: <Code className="w-6 h-6 text-vivid-purple" />,
      content: "I stepped foot into the technical world by learning C and Java in school, and that's where it all started - my passion for coding. Out of my interest, I started experimenting with the languages and found myself drawn to DSA. This journey led me to explore competitive programming, where I continue to challenge myself and grow."
    },
    {
      title: "Open Source",
      icon: <Github className="w-6 h-6 text-vivid-purple" />,
      content: "I learnt about open-source and contributions a few months ago and I'm a huge fan of it! I loved contributing to Hacktoberfest-24 and GSSoC Ext.-24. Making my GitHub completely green is something I envision soon enough."
    },
    {
      title: "Web Development",
      icon: <Brain className="w-6 h-6 text-vivid-purple" />,
      content: "Now, I aim to conquer the domain of web development and although I'm still a rookie front-end specialist, I can assure you that I will meet my goals soon enough."
    },
    {
      title: "IoT & Beyond",
      icon: <Globe className="w-6 h-6 text-vivid-purple" />,
      content: "Apart from these, I have worked on a few projects in IoT and embedded systems too, and it has been a great experience so far! Definitely cannot wait to explore more of what the coding world has to offer and upskill myself :)"
    }
  ];

  const hobbies = [
    { icon: <Book className="w-5 h-5" />, label: "Reading" },
    { icon: <Guitar className="w-5 h-5" />, label: "Guitar" },
    { icon: <Activity className="w-5 h-5" />, label: "Badminton" },
    { icon: <Puzzle className="w-5 h-5" />, label: "Rubix Cube" },
    { icon: <Brain className="w-5 h-5" />, label: "Sudoku" },
    { icon: <GamepadIcon className="w-5 h-5" />, label: "Gaming" }
  ];

  const devIcons = [
    { icon: <Code className="w-8 h-8 opacity-15" />, style: { top: '15%', left: '10%', transform: 'rotate(15deg)' } },
    { icon: <Brain className="w-10 h-10 opacity-15" />, style: { top: '30%', left: '25%', transform: 'rotate(-10deg)' } },
    { icon: <Globe className="w-9 h-9 opacity-15" />, style: { top: '60%', left: '15%', transform: 'rotate(25deg)' } },
    { icon: <Github className="w-7 h-7 opacity-15" />, style: { top: '25%', right: '8%', transform: 'rotate(-5deg)' } },
    { icon: <Pen className="w-6 h-6 opacity-15" />, style: { top: '50%', right: '20%', transform: 'rotate(10deg)' } },
    { icon: <Puzzle className="w-8 h-8 opacity-15" />, style: { top: '70%', right: '10%', transform: 'rotate(-15deg)' } },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      <BackToTop />
      
      <div className="container mx-auto px-4 py-6 flex justify-between items-center bg-[#D4E3FD] backdrop-blur-sm rounded-lg">
        <Button 
          onClick={handleDownloadResume} 
          variant="outline" 
          className="bg-soft-purple text-dark-purple hover:bg-light-purple transition-colors"
        >
          <Download className="mr-2 h-4 w-4" /> 
          Download Resume
        </Button>
        <nav className="space-x-4">
          <Link to="/projects">
            <Button variant="ghost" className="text-dark-purple hover:bg-soft-purple">
              Projects
            </Button>
          </Link>
          <Link to="/articles">
            <Button variant="ghost" className="text-dark-purple hover:bg-soft-purple">
              Articles
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="text-dark-purple hover:bg-soft-purple">
              Contact
            </Button>
          </Link>
        </nav>
      </div>

      <section className="container mx-auto px-4 py-20 md:py-32 rounded-2xl backdrop-blur-sm mt-6 relative overflow-hidden">
        <BirdsBackground>
          <div className="max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark-purple bg-gradient-to-r from-vivid-purple to-ocean-blue bg-clip-text text-transparent">
                Sinchana N
              </h1>
              <div className="text-xl md:text-2xl mb-8 text-dark-purple">
                <TypewriterEffect
                  texts={[
                    "Front end developer",
                    "Content writer",
                    "Open source enthusiast"
                  ]}
                />
              </div>
              <Link to="/articles">
                <Button size="lg" className="bg-vivid-purple hover:bg-light-purple text-white transition-colors">
                  View My Work
                </Button>
              </Link>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <img 
                src="/lovable-uploads/f39e637c-88df-492f-8e2f-2dfc170fbedb.png" 
                alt="Profile with wings" 
                className="max-w-full h-auto rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </BirdsBackground>
      </section>

      <section className="container mx-auto px-4 py-16 mt-10 bg-gradient-to-br from-light-purple/20 to-soft-blue/20 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-purple">About Me</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {aboutSections.map((section, index) => (
              <Card key={index} className="p-6 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h3 className="text-xl font-semibold text-dark-purple">{section.title}</h3>
                </div>
                <p className="text-dark-purple/90">{section.content}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Pen className="w-6 h-6 text-vivid-purple" />
              <h3 className="text-xl font-semibold text-dark-purple">Content Writing</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-dark-purple mb-2">Motivation & Interest</h4>
                <p className="text-dark-purple/90">
                  I have always loved reading novels from an early age, and I started writing short essays out of interest. Writing science articles became a passion when I became more interested in science a few years ago. Now, I enjoy reading science facts and publishing them along with writing.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-dark-purple mb-2">Experience</h4>
                <p className="text-dark-purple/90">
                  I have written several science articles for school and college magazines, mainly related to biology. Additionally, I have worked on scripts for the hosting team, focusing on audience engagement and peer perspectives. For technical writing, I am currently upskilling myself in certain domains to publish tech articles in the near future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16 mt-10 bg-gradient-to-br from-soft-purple/30 to-light-purple/20 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-purple">Hobbies & Interests</h2>
          <p className="text-dark-purple/90 text-center mb-8">
            Besides coding and development, I love travelling and reading novels. I often play the guitar and find myself deep in thought gazing up at the sky when something pops up in my brain.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex items-center gap-2 bg-soft-purple/50 px-5 py-3 rounded-full text-dark-purple">
                {hobby.icon}
                <span className="font-medium">{hobby.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 mt-10 bg-gradient-to-br from-soft-blue/30 to-light-purple/20 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark-purple">Let's Connect</h2>
          <p className="text-lg mb-8 text-dark-purple/90">
            Interested in collaborating or have questions about my work? I'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-vivid-purple hover:bg-light-purple text-white transition-colors">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 mt-10">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Sinch25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-purple hover:text-vivid-purple transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sinchana-n-8b3416323/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-purple hover:text-vivid-purple transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
