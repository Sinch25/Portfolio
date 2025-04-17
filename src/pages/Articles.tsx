
import { Link, Outlet, Navigate, useParams } from 'react-router-dom';
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
    title: 'Existential Crisis Norms',
    date: '15/12/2024',
    tag: 'biology'
  },
  { 
    id: '3', 
    title: 'Poster',
    date: '10/09/2021',
    tag: 'literature'
  },
  { 
    id: '4', 
    title: 'The Times Newspaper',
    date: '03/07/2021',
    tag: 'history'
  }
];

const Articles = () => {
  const { articleId } = useParams();

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
            {!articleId ? <Navigate to="/articles/1" replace /> : <Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
