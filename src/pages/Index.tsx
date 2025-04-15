
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/TypewriterEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sinchana N
          </h1>
          <div className="text-xl md:text-2xl mb-8">
            <TypewriterEffect
              texts={[
                "Front end developer",
                "Content writer",
                "Open source enthusiast"
              ]}
            />
          </div>
          <Link to="/articles">
            <Button size="lg">
              View My Work
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I have always loved reading novels from an early age, and I started writing short essays out of interest a bit later. Writing science articles became a passion of mine when I became more interested in science a few years ago. Now, I enjoy reading science facts and publishing them along with writing.
          </p>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg mb-8">
            Interested in collaborating or have questions about my work? I'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
