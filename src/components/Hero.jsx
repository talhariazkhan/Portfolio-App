import { ArrowRight, Users, Sparkles, Zap, Code } from 'lucide-react'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" />
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        Available for new projects
                    </div>
                    <h1 className="hero-title">
                        We Build <span className="gradient-text">Smart Digital</span> Solutions
                    </h1>
                    <p className="hero-description">
                        We are a passionate team of developers, designers, and strategists crafting
                        modern web applications, mobile solutions, and digital experiences that drive
                        real business results.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#team" className="btn btn-secondary">
                            <Users size={18} /> Meet Our Team
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">30+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-graphic">
                        <div className="hero-graphic-inner">
                            <Code size={40} className="hero-graphic-icon" />
                            <div className="code-line" />
                            <div className="code-line" />
                            <div className="code-line" />
                            <div className="code-line" />
                        </div>

                        <div className="hero-float-shape shape-1">
                            <span className="shape-icon purple"><Sparkles size={18} /></span>
                            Design
                        </div>
                        <div className="hero-float-shape shape-2">
                            <span className="shape-icon indigo"><Zap size={18} /></span>
                            Speed
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
