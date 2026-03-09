import { useState } from 'react'
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        Have a project in mind? We'd love to hear from you. Reach out and let's
                        build something great together.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's start a conversation</h3>
                        <p>
                            Whether you have a question, want to discuss a project idea, or just want
                            to say hello — our inbox is always open. We typically respond within 24 hours.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Email</h4>
                                    <p>hello@devhouse.io</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <MapPin size={20} />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Location</h4>
                                    <p>Lahore, Pakistan</p>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="contact-detail-text">
                                    <h4>Phone</h4>
                                    <p>+92 300 1234567</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <a href="#" className="contact-social-link" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="#" className="contact-social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="contact-social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary form-submit">
                                <Send size={18} /> Send Message
                            </button>
                            {submitted && (
                                <div className="form-success">
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
