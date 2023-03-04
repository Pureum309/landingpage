import dynamic from "next/dynamic";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from '@/components/project/projectCard';
// import 'animate.css';
import TrackVisibility from "react-on-screen";
import DoCard from "./doCard";
import AboutMe from "./aboutMe";
import WorkCard from "./work";

export default function Project() {
    const projects = [
        {
            title: "Ohana",
            description: "Ohana is an app that creates a network for people with accessibility issues so that they can reach out to multiple individuals who can help them achieve their daily tasks and errands.",
            imgUrl: "/images/ohana.png",
            gitLink: "https://github.com/Pureum309/OHANA"
            
        },
        {
            title: "Oceeco",
            description: "The Oceeco is an informative form-based app that provides easy-to-understand and detailed knowledge about common plastic found in the ocean and their effect on the marine ecosystem.",
            imgUrl: "/images/oceeco.png",
            gitLink: "https://github.com/Pureum309/oceeco",
            verLink: "https://oceeco.vercel.app/"
            
        },
        {
            title: "Clime7",
            description: "The Clime7 gives a 6-day forecast weather website that displays weather information for the next six days. It includes the current temperature, date and month, and a brief description of the weather conditions for each day.",
            imgUrl: "/images/clime7.png",
            gitLink: "https://github.com/Pureum309/clime7",
            verLink: "https://clime7.vercel.app/"
            
        },
        {
            title: "Quickfit",
            description: "Quickfit is an online platform designed to assist people following specific diets, including keto, vegan, or paleo, to navigate fast food restaurant menus easily.",
            imgUrl: "/images/quickfit.png",
            gitLink: "https://github.com/Pureum309/quickfit",
            verLink: "https://quickfit.vercel.app/"
            
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
    ];

    const works = [
        {
            title: "BCIT",
            jobDesc: "Digital Design and Development",
            date: "Sep 2021 - Current",
            titleDesc: "Building a solid foundation in designing, developing, and creating interactive, dynamic, immersive social and online applications across various digital media platforms.",
            imgUrl: "/logos/bcit.png"
        },
        {
            title: "Natural Life Nutrition",
            jobDesc: "Office Admin",
            date: "Mar 2017 - July 2021",
            titleDesc: "Natural Life Nutrition Inc. is a nutraceutical manufacturer and supplier located in Barnaby. Establishing effective relationships with a broad range of contacts. Keeping up-to-date with the lasted pharmaceutical industries",
            imgUrl: "/logos/nln.png"
        },
        {
            title: "e:dm consulting",
            jobDesc: "Office Admin",
            date: "Oct 2015 -  Feb 2017",
            titleDesc: "Edm education consulting gives direction and guidance to students in planning to enter universities or language schools in Canada. Identify curriculum issues in language schools or college. Keep update the current curriculum",
            imgUrl: "/logos/edm.png"
        },
        {
            title: "Shaw Communications",
            jobDesc: "CSE",
            date: "Mar -  Oct 2015",
            titleDesc: "Shaw Communications Inc. is a Canadian telecommunications company which provides telephone, Internet, television, and mobile services. Manage day-to-day tasks efficiently with a primary focus on building client rapport",
            imgUrl: "/logos/shaw.png"
        },
        {
            title: "Starbucks",
            jobDesc: "Barista",
            date: "July 2014 - March 2015",
            titleDesc: "Connect and create moments that make a difference and work together to create a welcoming store environment",
            imgUrl: "/logos/starbucks.png"
        },
        {
            title: "Acadia University",
            jobDesc: "Business Admin",
            date: "Gradiated May 2014",
            titleDesc: `Learned a broad array of management-related subjects like finance, sales and marketing, human resource management and so on.`,
            imgUrl: "/logos/acadia.jpeg"
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
                                <Nav.Link eventKey="first">About Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">What I Do</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Portfolio</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                                <AboutMe />
                                <Row> 
                                { works.map((w, index) => {
                                        return (
                                            <WorkCard 
                                                key={index}
                                                {...w}
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