
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Maximize, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

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
  const [imageOpen, setImageOpen] = useState<string | null>(null);

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
            <div key={index} className="flex flex-col items-center">
              <img 
                src={image}
                alt={`Article illustration ${index + 1}`}
                className={isFullWidthImage ? "rounded-lg shadow-md w-full h-auto max-h-[70vh] object-contain mx-auto" : "rounded-lg shadow-md w-full"}
              />
              {isFullWidthImage && (
                <Button 
                  variant="outline"
                  className="mt-4 bg-soft-purple text-dark-purple hover:bg-light-purple transition-colors"
                  onClick={() => setImageOpen(image)}
                >
                  <Maximize className="mr-2 h-4 w-4" />
                  View Fullscreen
                </Button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Dialog */}
      <Dialog open={!!imageOpen} onOpenChange={() => setImageOpen(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-1 overflow-auto bg-dark-purple/95">
          <DialogClose className="absolute right-4 top-4 rounded-full bg-white/20 p-2 z-50">
            <X className="h-4 w-4 text-white" />
          </DialogClose>
          {imageOpen && (
            <img 
              src={imageOpen}
              alt="Fullscreen view"
              className="w-full h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};
