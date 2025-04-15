
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Projects = () => {
  // This is a placeholder. You'll want to replace these with your actual projects
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: ["Next.js", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
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
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-soft-purple text-dark-purple rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
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
