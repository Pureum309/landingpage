import dynamic from "next/dynamic";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from '@/components/project/projectCard';
// import 'animate.css';
import TrackVisibility from "react-on-screen";
import DoCard from "./doCard";
import AboutMe from "./aboutMe";

export default function Project() {
    const projects = [
        {
            title: "Ohana",
            description: "Ohana is an app that creates a network for people with accessibility issues so that they can reach out to multiple individuals who can help them achieve their daily tasks and errands.",
            imgUrl: "/images/ohana.png"
            
        },
        {
            title: "Oceeco",
            description: "The Oceeco is an informative form-based app that provides easy-to-understand and detailed knowledge about common plastic found in the ocean and their effect on the marine ecosystem.",
            imgUrl: "/images/oceeco.png"
            
        },
        {
            title: "Clime7",
            description: "The Clime7 gives a 6-day forecast weather website that displays weather information for the next six days. It includes the current temperature, date and month, and a brief description of the weather conditions for each day.",
            imgUrl: "/images/clime7.png"
            
        },
        {
            title: "Quickfit",
            description: "Quickfit is an online platform designed to assist people following specific diets, including keto, vegan, or paleo, to navigate fast food restaurant menus easily.",
            imgUrl: "/images/quickfit.png"
            
        },
    ];

    const roles = [
        {
            title: "App Development",
            description: "If you are looking for a user-friendly app that will attract more mobile users, I can help you design and build a platform with the latest and trendiest look and feel.",
            imgUrl: "/images/app.png"
        },
        {
            title: "Wep Development",
            description: "If you are looking for a developer who’ll take over the research and development of your website, I am a well-established professional to help you with this.",
            imgUrl: "/images/web.png"
        },
        {
            title: "UI/UX Design",
            description: "An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.",
            imgUrl: "/images/uiux.png"
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>My Experiences</h2>
                        <p>Implementing the endless ideas I imagined with the technology I learned is interesting. I will always be a front-end developer who is fearless of new attempts. From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Portfolio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">What I do</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">About me</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        roles.map((role, index) => {
                                            return (
                                                <DoCard
                                                    key={index}
                                                    {...role}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <AboutMe />
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
                </TrackVisibility>
                </Col>
            </Row>
            </Container>
            <img className="background-image-right" src="/images/color-sharp.png"></img>
        </section>
    )
}