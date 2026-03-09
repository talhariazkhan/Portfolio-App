import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Team from './components/Team'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('devhouse-theme')
        return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.setItem('devhouse-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(prev => !prev)

    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <Projects />
                <Team />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
