import { useState, useEffect } from 'react'
import { Code2, Menu, X, Sun, Moon } from 'lucide-react'
import './Navbar.css'

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Update active section
            const sections = navItems.map(item => item.href.substring(1))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 120) {
                        setActiveSection(sections[i])
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href) => {
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
                        <span className="logo-icon"><Code2 size={20} /></span>
                        DevHouse
                    </a>

                    <div className="nav-links">
                        {navItems.map(item => (
                            <button
                                key={item.href}
                                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                                onClick={() => handleNavClick(item.href)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                {navItems.map(item => (
                    <button
                        key={item.href}
                        className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.href)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    )
}
