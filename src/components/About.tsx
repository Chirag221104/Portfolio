import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Target
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React & TypeScript', level: 95, icon: Code2 },
    { name: 'Python & AI/ML', level: 90, icon: Brain },
    { name: 'FastAPI', level: 80, icon: Database },
    { name: 'Cloud & DevOps', level: 85, icon: Cloud },
    { name: 'Git & Version Control', level: 90, icon: GitBranch },
    { name: 'Problem Solving', level: 95, icon: Target },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate software developer with a strong foundation in full-stack development 
              and artificial intelligence, always eager to learn and build innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <Card className="shadow-custom-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">My Journey</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a passionate full-stack developer with a deep interest in artificial intelligence 
                      and machine learning. My journey in technology started with curiosity about how 
                      things work, which led me to pursue computer science and specialize in building 
                      intelligent applications.
                    </p>
                    
                    <p>
                      Currently, I focus on creating seamless user experiences with React and TypeScript 
                      while leveraging Python for AI/ML solutions. I enjoy working on projects that 
                      combine modern web technologies with cutting-edge AI capabilities.
                    </p>

                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing to 
                      open-source projects, or sharing knowledge with the developer community through 
                      blogs and tutorials.
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Technologies I Love</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Python', 'AI/ML', 'Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Section */}
            <div>
              <Card className="shadow-custom-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
                  
                  <div className="space-y-6">
                    {skills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <IconComponent className="h-4 w-4 text-primary mr-2" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${index * 100}ms`
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Education & Certifications */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-3">Education & Certifications</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Bachelor's in Information Technology (Pursuing, TE Semester VI)</p>
                      <p>• Projects: VisaRoute (Digital Immigration Assistance Platform), Signature Forgery Detection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;