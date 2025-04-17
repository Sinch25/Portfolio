
import { Card } from "@/components/ui/card";

interface ArticleContentProps {
  title: string;
  date: string;
  tags: string[];
  content: string;
  images?: string[];
}

export const ArticleContent = ({ title, date, tags, content, images }: ArticleContentProps) => {
  // Check if this is the poster or newspaper article (articles 3 or 4)
  const isFullWidthImage = title === "Poster" || title === "The Times Front Page";

  return (
    <Card className="p-8 bg-gradient-to-br from-soft-blue/30 to-light-purple/20 backdrop-blur-sm">
      <h1 className="text-3xl font-bold text-dark-purple mb-4">{title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-dark-purple/70">{date}</span>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-soft-purple/50 text-dark-purple rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose max-w-none">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-dark-purple/90 mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      {images && images.length > 0 && (
        <div className={isFullWidthImage ? "mt-6" : "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"}>
          {images.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Article illustration ${index + 1}`}
              className={isFullWidthImage ? "rounded-lg shadow-md w-full h-auto max-h-[70vh] object-contain mx-auto" : "rounded-lg shadow-md w-full"}
            />
          ))}
        </div>
      )}
    </Card>
  );
};
