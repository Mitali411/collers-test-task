
import { Row, Col, Card, Button } from "react-bootstrap";
import '../design/productsection.css';
import img6 from '../Images/Picture.png';
import img7 from '../Images/Picture (1).png';
import img8 from '../Images/Picture (2).png';
import img9 from '../Images/Rectangle 25 (1).png'
import img10 from '../Images/Rectangle 25 (2).png'
import img11 from '../Images/Rectangle 26 (1).png'
import img12 from '../Images/Rectangle 26 (2).png'
const ProductSection = () => {
  return (
    <div className="product-section-container my-5">
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="section-title">The best of the best</h2>
          <Button className="signup-buttons">Sign up now</Button>
        </div>
      </div>

      <Row className="product-cards-container" style={{ display:"flex" ,marginLeft:"300px"}}>
        {/* Card 1 */}
        <Col xs={12} md={4}>
      
          <Card className="product-card">
            <Card.Body>
              <Card.Img variant="top" src={img6} className="product-image" />
              <Card.Title className="product-card-title">Title</Card.Title>
              {/* <img src={img11} style={{ width:"271px",height:"161px",right:"306px",borderRadius:"50px",zIndex:1,  transform: "translate(0, -30%)", position:"absolute"}}/>          */}
              <Card.Text className="product-card-text">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </Card.Text>
              <Button variant="primary" className="buy-button">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
        <img src={img9} style={{ width:"161px",height:"161px",borderRadius:"50px",   transform: "translate(0, -30%)", position:"absolute"}}/>
          <Card className="product-card" style={{position:"relative"}}>
            <Card.Body>
              <Card.Img variant="top" src={img7} className="product-image" />
              <Card.Title className="product-card-title">Title</Card.Title>
              <Card.Text className="product-card-text">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </Card.Text>
              <Button variant="primary" className="buy-button">
                Buy Now
              </Button>
              <img src={img10} style={{ width:"161px",height:"132px",borderRadius:"50px", left:513, position:"absolute"}}/>
            </Card.Body>
          </Card>
        </Col>


        <Col xs={12} md={4}>
          <Card className="product-card">
          {/* <img src={img12} style={{ width:"161px",height:"161px",right:"306px",borderRadius:"50px",zIndex:1,  transform: "translate(0, -30%)", position:"absolute"}}/>          */}
            <Card.Body>
              <Card.Img variant="top" src={img8} className="product-image" />
              <Card.Title className="product-card-title">Title</Card.Title>
              <Card.Text className="product-card-text">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </Card.Text>
              <Button variant="primary" className="buy-button">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductSection;
