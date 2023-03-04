import { Col } from "react-bootstrap"

export default function ProjectCard({ title, description, imgUrl, gitLink, verLink  }) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href={gitLink}><img src='/images/github.png' alt="github" /></a>
                            <a href={verLink}><img src='/images/vercel.png' alt="vercel" /></a>
                        </div>
                    </span>
                </div>
            </div>
        </Col>
    )
}