
import { useParams } from 'react-router-dom';

const ArticleView = () => {
  const { articleId } = useParams();
  
  // In a real app, you would fetch the article content based on the ID
  return (
    <div className="prose max-w-none">
      <h1>Article {articleId}</h1>
      <p>Article content would go here...</p>
    </div>
  );
};

export default ArticleView;
