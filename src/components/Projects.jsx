import { Github, ExternalLink } from 'lucide-react'
import './Projects.css'

const projects = [
    {
        title: 'Analytics Dashboard',
        description: 'A real-time SaaS analytics platform with interactive charts, custom reports, and team collaboration features.',
        image: '/images/project-dashboard.png',
        tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
        github: '#',
        demo: '#',
    },
    {
        title: 'ShopWave E-Commerce',
        description: 'Full-stack e-commerce platform with payment integration, inventory management, and personalized recommendations.',
        image: '/images/project-ecommerce.png',
        tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
        github: '#',
        demo: '#',
    },
    {
        title: 'AI Chat Assistant',
        description: 'Intelligent chatbot platform powered by large language models with custom training and enterprise integrations.',
        image: '/images/project-chatbot.png',
        tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
        github: '#',
        demo: '#',
    },
]

export default function Projects() {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of our recent work, showcasing our expertise across multiple
                        domains and technology stacks.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-image-overlay" />
                            </div>
                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span className="tech-badge" key={i}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <a href={project.github} className="btn btn-secondary btn-sm">
                                        <Github size={16} /> GitHub
                                    </a>
                                    <a href={project.demo} className="btn btn-primary btn-sm">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
