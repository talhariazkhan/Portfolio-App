import { Linkedin, Github } from 'lucide-react'
import './Team.css'

const team = [
    {
        name: 'Ali Hassan',
        role: 'Full Stack Developer',
        image: '/images/team-1.png',
        skills: ['React', 'Node.js', 'AWS', 'Python'],
        linkedin: '#',
        github: '#',
    },
    {
        name: 'Sara Ahmed',
        role: 'UI/UX Designer',
        image: '/images/team-2.png',
        skills: ['Figma', 'Prototyping', 'Design Systems', 'CSS'],
        linkedin: '#',
        github: '#',
    },
    {
        name: 'Usman Tariq',
        role: 'Backend Engineer',
        image: '/images/team-3.png',
        skills: ['Go', 'PostgreSQL', 'Docker', 'gRPC'],
        linkedin: '#',
        github: '#',
    },
]

export default function Team() {
    return (
        <section className="team section" id="team">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Team</span>
                    <h2 className="section-title">Meet the Experts</h2>
                    <p className="section-subtitle">
                        Our talented team brings together diverse skills and deep expertise to
                        deliver exceptional results on every project.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-avatar">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-skills">
                                {member.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                            <div className="team-socials">
                                <a href={member.linkedin} className="team-social-link" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href={member.github} className="team-social-link" aria-label="GitHub">
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
