import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/chirag-profile.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-custom-lg hero-glow">
                  <img
                    src={profileImage}
                    alt="Chirag Malde - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse-glow"></div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                  Chirag Malde
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90">
                Full Stack Developer & AI Enthusiast
              </h2>

              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Passionate about building innovative web applications and AI-powered solutions. 
                Specializing in React, Python, TypeScript, and cutting-edge AI/ML technologies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-white text-primary hover:bg-white/90 shadow-custom-lg group"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://github.com/Chirag221104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chirag-malde-9794b32b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:chiragmalde166@apsit.edu.in"
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;