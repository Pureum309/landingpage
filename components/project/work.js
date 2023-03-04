import { Col } from "react-bootstrap"

export default function WorkCard({ 
    title = "BCIT", 
    jobDesc  = "Digital Design and Development", 
    date = "Sep 2021 - Current", 
    titleDesc,
    description, 
    imgUrl  = "/images/ohana.png"
}) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-workimgbx">
                <div className="workCont">
                    <img src={imgUrl} alt="img" />
                    <div className="workText">
                        <h4>{title}</h4>
                        <p>{jobDesc}</p>
                        <div className="workText-line"/>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="proj-worktxtx">
                    <h4>{titleDesc}</h4>
                </div>
            </div>
        </Col>
    )
}