import { Target, Eye, ShieldCheck } from 'lucide-react'
import './About.css'

const cards = [
    {
        icon: <Target size={22} />,
        iconClass: 'mission',
        title: 'Our Mission',
        description: 'To empower businesses with innovative technology solutions that streamline operations, enhance user experiences, and unlock new growth opportunities.',
    },
    {
        icon: <Eye size={22} />,
        iconClass: 'vision',
        title: 'Our Vision',
        description: 'To become a leading software development partner recognized for delivering world-class digital products that shape the future of industries.',
    },
    {
        icon: <ShieldCheck size={22} />,
        iconClass: 'choose',
        title: 'Why Choose Us',
        description: 'We combine deep technical expertise with a client-first approach. Our agile methodology ensures transparent communication, on-time delivery, and solutions that truly work.',
    },
]

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Us</span>
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-subtitle">
                        A dedicated team passionate about crafting digital experiences that make a difference.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Founded with a vision to bridge the gap between ideas and technology,
                            DevHouse has grown into a trusted software development partner for startups
                            and enterprises alike.
                        </p>
                        <p>
                            We specialize in building custom web applications, scalable APIs, mobile
                            solutions, and cloud-native architectures. Our team stays at the forefront
                            of technology — leveraging modern frameworks, best practices, and agile
                            methodologies to deliver products that exceed expectations.
                        </p>
                        <p>
                            Every project we undertake is driven by a commitment to quality, performance,
                            and long-term value. We don't just write code — we build solutions that grow
                            with your business.
                        </p>
                    </div>

                    <div className="about-cards">
                        {cards.map((card, index) => (
                            <div className="about-card" key={index}>
                                <div className={`about-card-icon ${card.iconClass}`}>
                                    {card.icon}
                                </div>
                                <div className="about-card-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
