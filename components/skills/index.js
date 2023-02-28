import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I’ve spent most of these years working across different areas of design, like front-end development, application development, and a slight taste of back-end development, to my current role developing products for mobile and website platforms.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src='/images/PieChart-4.png' alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src='/images/PieChart-4.png' alt="Image" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src='/images/PieChart-3.png' alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src='/images/PieChart-1.png' alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src='/images/PieChart-1.png' alt="Image" />
                                    <h5>NextJS</h5>
                                </div>
                                <div className="item">
                                    <img src='/images/PieChart-2.png' alt="Image" />
                                    <h5>Adobe Suite Software</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src="/images/color-sharp.png" />
        </section>
    )
}