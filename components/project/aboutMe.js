import { Col, Row, Container } from "react-bootstrap"

export default function AboutMe() {
    return (
        <div className="proj-aboutCont">
            <div className="proj-img">
                <img src='/images/memoji.png' />
            </div>
            <div className="proj-abtTx">
                <h4>Hi, I'm Sarah</h4>
                <span>I'm a person who is observant and prospecting personality traits. I have an open mind, approaching life, new experiences, and people with grounded warmth. My ability helps me uncover exciting potential. I am eager to try new things and have a fascinating array of passions and interests in learning.</span>
            </div>
        </div>
    )
}