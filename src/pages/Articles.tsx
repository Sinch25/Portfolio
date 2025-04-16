
import { Link, Outlet } from 'react-router-dom';
import { FileTree } from '@/components/FileTree';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const articles = [
  { 
    id: '1', 
    title: 'Neuroscience of Music',
    date: '28/11/2024',
    tag: 'biology'
  },
  { 
    id: '2', 
    title: 'The Mind-Body Connection',
    date: '15/12/2024',
    tag: 'biology'
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-purple/30 to-soft-blue/20">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-dark-purple hover:bg-soft-purple">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="bg-white/50 backdrop-blur-sm border border-soft-purple rounded-lg shadow-sm">
            <FileTree articles={articles} />
          </div>
          <div className="min-h-[500px] bg-white/50 backdrop-blur-sm border border-soft-purple rounded-lg p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
