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
      description: 'AI-powered system using computer vision and machine learning to detect forged documents with 95% accuracy. Implements deep learning models for image analysis and fraud detection.',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      githubUrl: 'https://github.com/chiragmalde/document-forgery-detection',
      liveUrl: 'https://document-detection-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Traffic Recognition & Analysis',
      description: 'Real-time traffic sign recognition system using YOLO and CNN models. Processes live video feeds to identify and classify traffic signs for autonomous vehicle applications.',
      category: 'ai',
      technologies: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'FastAPI'],
      githubUrl: 'https://github.com/chiragmalde/traffic-recognition',
      liveUrl: 'https://traffic-recognition-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with modern UI/UX, payment integration, inventory management, and admin dashboard. Built with microservices architecture.',
      category: 'fullstack',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/chiragmalde/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics Dashboard',
      description: 'Comprehensive analytics dashboard for social media metrics with real-time data visualization, sentiment analysis, and performance tracking.',
      category: 'web',
      technologies: ['React', 'TypeScript', 'D3.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/chiragmalde/social-analytics',
      liveUrl: 'https://social-analytics-demo.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot platform with natural language processing, context awareness, and multi-language support. Integrates with various messaging platforms.',
      category: 'ai',
      technologies: ['Python', 'NLP', 'Django', 'Redis', 'WebSocket'],
      githubUrl: 'https://github.com/chiragmalde/ai-chatbot',
      liveUrl: 'https://chatbot-demo.vercel.app',
      featured: true
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and productivity analytics.',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/chiragmalde/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      featured: false
    }
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
                href="https://github.com/chiragmalde" 
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