import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react'
import './Footer.css'

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions',
    'API Development',
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="nav-logo">
                            <span className="logo-icon"><Code2 size={20} /></span>
                            DevHouse
                        </a>
                        <p>
                            Building smart digital solutions that help businesses grow. We turn ideas
                            into powerful, scalable software products.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {services.map(service => (
                                <li key={service}>
                                    <a href="#projects">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="footer-social">
                            <a href="#" className="footer-social-link" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {year} DevHouse. Made with <Heart size={14} style={{ display: 'inline', verticalAlign: 'middle', color: '#ef4444' }} /> All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
