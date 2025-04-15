
import { Link } from 'react-router-dom';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const Contact = () => {
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
        
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
