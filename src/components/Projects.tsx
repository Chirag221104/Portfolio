import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Document Forgery Detection System',
      description: 'Python-based system for detecting forged documents by analyzing PDFs, Word files, and image metadata. Built using FastAPI for the web interface and libraries like PyPDF2, PyMuPDF, and python-docx for document processing and verification.',
      category: 'fullstack',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      githubUrl: 'https://github.com/Chirag221104/hybrid-document-forgery-detection',
      liveUrl: 'https://hybrid-document-forgery-detection-f.vercel.app/',
      featured: false
    },
    {
      id: 2,
      title: 'Traffic Recognition & Analysis',
      description: 'Python-based CNN system for recognizing traffic signs with 98% accuracy. Improved the original model by applying CLAHE, edge enhancement, and denoising to enhance image quality and boost performance.',
      category: 'ai',
      technologies: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'FastAPI'],
      githubUrl: 'https://github.com/Chirag221104/Traffic_Recognition_Project_ROSPL',
      liveUrl: '',
      featured: true
    },
    {
      id: 3,
      title: 'Notion Clone',
      description: "A web application replicating Notion's core features, built using Next.js, TypeScript, Tailwind CSS, and Firebase. Implements real-time collaborative editing, user authentication, and a responsive UI for seamless note-taking and project management.",
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'React'],
      githubUrl: 'https://github.com/chiragmalde/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 4,
      title: 'VisaRoute',
      description: 'VisaRoute is a web application designed to assist users in determining the appropriate visa route based on their qualifications and intentions. The platform provides personalized guidance by analyzing user inputs and offering tailored recommendations.',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL','JWT (JSON Web Tokens)','Docker','Heroku'],
      githubUrl: 'https://github.com/Chirag221104/VisaRoute',
      liveUrl: 'https://social-analytics-demo.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: 'Signature Forgery Detection System',
      description: 'A secure web application designed to authenticate users through signature verification, leveraging advanced machine learning techniques. This system ensures robust security by detecting forged signatures, making it ideal for applications requiring high trust levels.',
      category: 'web',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'FastAPI', 'Python', 'TensorFlow', 'OpenCV', 'Pytesseract'],
      githubUrl: 'https://github.com/Chirag221104/Signature-Detection-System',
      liveUrl: 'https://social-analytics-demo.vercel.app',
      featured: true
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'web', label: 'Web Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my latest work in web development, artificial intelligence, 
              and full-stack applications.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => setFilter(category.id)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`project-card shadow-custom-md hover:shadow-glow transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge variant="default" className="bg-gradient-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button variant="outline" asChild>
              <a 
                href="https://github.com/Chirag221104?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;