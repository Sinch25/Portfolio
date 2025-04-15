
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "./ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a placeholder. You'll need to implement actual form submission
    console.log(formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/50 backdrop-blur-sm border-soft-purple">
      <CardHeader>
        <CardTitle className="text-dark-purple">Get in Touch</CardTitle>
        <CardDescription>
          Send me a message and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/70"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/70"
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[120px] bg-white/70"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-vivid-purple hover:bg-light-purple text-white transition-colors"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
