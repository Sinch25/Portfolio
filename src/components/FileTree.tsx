
import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useParams } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
}

interface FileTreeProps {
  articles: Article[];
}

export const FileTree = ({ articles }: FileTreeProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { articleId } = useParams();

  return (
    <div className="p-4">
      <div 
        className="flex items-center gap-1 cursor-pointer mb-2" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <span className="font-medium">Articles</span>
      </div>
      
      {isOpen && (
        <div className="ml-4 space-y-1">
          {articles.map((article) => (
            <Link 
              key={article.id}
              to={`/articles/${article.id}`}
              className={cn(
                "flex items-center gap-2 p-1 rounded hover:bg-accent",
                articleId === article.id && "bg-accent text-accent-foreground"
              )}
            >
              <FileText size={16} />
              <span className="text-sm">{article.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
