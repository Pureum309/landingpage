import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End Developer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-itmes-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Sarah `}<span>{text}</span></h1>
                        <p>I am an enthusiastic web developer based in Vancouver, with a rich knowledge of over 2 years in html, css, js and ReactJS. With rich knowledge in web development, I have confidence in the understanding client and graphic designer’s requirements according to the latest trends. I have worked on several projects from different niches, so that you can rely on me for yours. I’ve spent most of these years working across different areas of design, like front-end development, application development, and a slight taste of back-end development, to my current role developing products for mobile and website platforms.</p>
                        <button onClick={() => console.log("connect Clicked")}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src='/images/webdev.svg' alt="Headder image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}