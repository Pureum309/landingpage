import { Col } from "react-bootstrap"

export default function DoCard({ title, description, imgUrl }) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-cont">
                <div className="proj-contTx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <img src={imgUrl} />
            </div>
        </Col>
    )
}