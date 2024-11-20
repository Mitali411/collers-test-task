import "../design/herosection.css";
import img1 from '../Images/shoes.jpg';
import { Button } from "react-bootstrap";
import image1 from '../Images/play-circle.png'

import { Row, Col, Card } from "react-bootstrap";
import img2 from "../Images/Icon.png";
import img3 from "../Images/Icon (1).png";
import img4 from "../Images/Icon (2).png";
import heart from "../Images/Rectangle 25.png"
import rectangle from "../Images/Rectangle 26.png"
import circle from "../Images/Rectangle 27.png"

const HeroSection = () => {
  return (
    <>
      <div className="section-container my-5">
        <div className="text-content">
          <h1 className="hero-title">Collectible Sneakers</h1>
          <p className="hero-description">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="button-group">
            <Button className="primary-button" style={{ border: " 1px solid #78350F" }}>Sign up now</Button>
            <Button className="secondary-button"
            >
              <img src={image1} style={{ height: "24px", width: "24px" }}></img>
              Watch Demo</Button>
          </div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={img1} alt="Top Image" className="hero-image" />
          </div>
        </div>

        <Row className="g-3">
          <Col xs={12} md={4}>
            <Card className="h-100" style={{ border: "none" }}>
              <Card.Body>
                <img
                  src={heart}
                  style={{
                    position: "absolute",
                    left: "32px",
                    zIndex: "1",
                    width: "53px",
                    height: "53px",
                    transform: "translate(0, -30%)",
                  }}
                  alt="Heart"
                />
                <Card.Img variant="top" src={img2} style={{
                  height: "64px",
                  width: "64px",
                  position: "relative",
                  zIndex: "2",
                }} />
                <Card.Title style={{ fontSize: '24px', fontWeight: '600' }}>
                  Nibh viverra
                </Card.Title>
                <Card.Text className="text-muted">
                  Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100" style={{ border: "none" }}>
              <Card.Body>
                <img
                  src={rectangle}
                  style={{
                    position: "absolute",
                    left: "32px",
                    zIndex: "1",
                    width: "53px",
                    height: "53px",
                    transform: "translate(0, -30%)",
                  }}
                  alt="rectangle"
                />

                <Card.Img variant="top" src={img3} style={{ height: "64px", width: "64px" }} />
                <Card.Title className="text-[#78350F]" style={{ fontSize: '24px', fontWeight: '600' }}>
                  Cursus amet
                </Card.Title>
                <Card.Text className="text-muted">
                  Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100" style={{ border: "none" }}>
              <Card.Body>
                <img
                  src={circle}
                  style={{
                    position: "absolute",
                    left: "32px",
                    zIndex: "1",
                    width: "53px",
                    height: "53px",
                    transform: "translate(0, -30%)",
                  }}
                  alt="circle"
                />
                <Card.Img variant="top" src={img4} style={{ height: "64px", width: "64px" }} />
                <Card.Title className="text-[#78350F]" style={{ fontSize: '24px', fontWeight: '600' }}>
                  Ipsum fermentum
                </Card.Title>
                <Card.Text className="text-muted">
                  Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    </>
  );
};

export default HeroSection;
