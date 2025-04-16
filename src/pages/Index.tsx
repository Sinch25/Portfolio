import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/TypewriterEffect";
import { Download, GraduationCap, Trophy, Code } from "lucide-react";

const Index = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/Sinchana_N_Resume.pdf";
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

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20 mt-10 bg-gradient-to-br from-soft-blue/30 to-light-purple/20 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="w-8 h-8 text-dark-purple mr-3" />
            <h2 className="text-3xl font-bold text-center text-dark-purple">Education</h2>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-dark-purple">Bangalore Institute of Technology, Bangalore</h3>
            <p className="text-dark-purple/80 mt-2">Bachelor of Engineering, Information Science Stream</p>
            <p className="text-dark-purple/80">September 2024 - Present</p>
            <p className="text-dark-purple font-semibold mt-2">Current SGPA: 9.15</p>
            <p className="text-dark-purple/90 mt-2">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-dark-purple/80 mt-1 ml-4">
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Database Management Systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-20 mt-10 bg-gradient-to-br from-soft-purple/30 to-soft-blue/30 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-8 h-8 text-dark-purple mr-3" />
            <h2 className="text-3xl font-bold text-center text-dark-purple">Hackathon Achievements</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-purple">Devhack 6.0, IIT-Dharwad</h3>
              <p className="text-dark-purple/80 mt-2">Top 30 Selection (100+ Teams)</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-purple">Google Girl Hackathon 2025</h3>
              <p className="text-dark-purple/80 mt-2">Shortlisted from 50,000+ Applicants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="container mx-auto px-4 py-20 mt-10 bg-gradient-to-br from-light-purple/20 to-soft-blue/30 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Code className="w-8 h-8 text-dark-purple mr-3" />
            <h2 className="text-3xl font-bold text-center text-dark-purple">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-purple">Weather App</h3>
              <p className="text-dark-purple/80 mt-2">Real-time weather information application</p>
              <a href="https://github.com/Sinch25/Web_Dev/tree/main/weather_app" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-vivid-purple hover:text-light-purple mt-2 inline-block">
                View on GitHub →
              </a>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark-purple">Poem Generator</h3>
              <p className="text-dark-purple/80 mt-2">Creative poetry generation application</p>
              <a href="https://github.com/Sinch25/Web_Dev/tree/main/Poems_project" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-vivid-purple hover:text-light-purple mt-2 inline-block">
                View on GitHub →
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button className="bg-vivid-purple hover:bg-light-purple text-white transition-colors">
                View All Projects
              </Button>
            </Link>
          </div>
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
    </div>
  );
};

export default Index;
