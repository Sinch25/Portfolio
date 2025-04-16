import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/TypewriterEffect";
import { Download, Brain, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/Sinchana_N_Resume.pdf";
    link.download = "Sinchana_N_Resume.pdf";
    link.click();
  };

  const skills = [
    { name: "Web Development", icon: "🌐" },
    { name: "Poster Making", icon: "🎨" },
    { name: "Content Writing", icon: "✍️" },
    { name: "Video Editing", icon: "🎬" }
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Navigation and Resume Download */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-gradient-to-br from-soft-purple/50 to-soft-blue/30 rounded-2xl backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
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
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 mt-10 bg-gradient-to-br from-light-purple/20 to-soft-blue/20 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-purple">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-dark-purple/90">
            I have always loved reading novels from an early age, and I started writing short essays out of interest a bit later. Writing science articles became a passion of mine when I became more interested in science a few years ago. Now, I enjoy reading science facts and publishing them along with writing.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20 mt-10 bg-gradient-to-br from-soft-blue/30 to-light-purple/20 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-8 h-8 text-dark-purple mr-3" />
            <h2 className="text-3xl font-bold text-center text-dark-purple">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-dark-purple">{skill.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
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

      {/* Footer */}
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
