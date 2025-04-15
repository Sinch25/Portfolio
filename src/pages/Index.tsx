
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/TypewriterEffect";
import { Download } from "lucide-react";
import resumePDF from "/resume.pdf";

const Index = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = "Sinchana_N_Resume.pdf";
    link.click();
  };

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
      <section className="container mx-auto px-4 py-20 md:py-32">
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
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-soft-purple to-soft-blue/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-purple">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-dark-purple/90">
            I have always loved reading novels from an early age, and I started writing short essays out of interest a bit later. Writing science articles became a passion of mine when I became more interested in science a few years ago. Now, I enjoy reading science facts and publishing them along with writing.
          </p>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="container mx-auto px-4 py-20">
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
    </div>
  );
};

export default Index;
