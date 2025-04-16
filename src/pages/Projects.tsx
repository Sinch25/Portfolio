
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information using the OpenWeatherMap API. Features include current weather conditions, temperature, humidity, and wind speed for any city worldwide.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      demoLink: "https://weatherappsinch.netlify.app/",
      githubLink: "https://github.com/Sinch25/Web_Dev/tree/main/weather_app"
    },
    {
      title: "Blog on Books",
      description: "A responsive blog platform dedicated to book reviews and literary discussions. Built with a clean, modern design that prioritizes readability and user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Sinch25/Web_Dev/tree/main/Blog_on_Books"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/30 to-light-purple/20">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-dark-purple hover:bg-soft-purple">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-dark-purple">My Projects</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm border-soft-purple hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-dark-purple">{project.title}</CardTitle>
                  <CardDescription className="text-dark-purple/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-soft-purple/50 text-dark-purple rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="bg-soft-purple/50 hover:bg-soft-purple">
                        View Code
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-vivid-purple hover:bg-light-purple text-white">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
