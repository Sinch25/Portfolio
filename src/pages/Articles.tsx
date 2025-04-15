
import { Link, Outlet } from 'react-router-dom';
import { FileTree } from '@/components/FileTree';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const articles = [
  { id: '1', title: 'The Future of Quantum Computing' },
  { id: '2', title: 'Understanding Dark Matter' },
  { id: '3', title: 'Exploring Neural Networks' },
  // Add more articles as needed
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="bg-card rounded-lg shadow-sm">
            <FileTree articles={articles} />
          </div>
          <div className="min-h-[500px] bg-card rounded-lg p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
