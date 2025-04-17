import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-purple/30 to-soft-blue/20">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link to="/">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-soft-purple/30"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-dark-purple">
            Contact Me
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
