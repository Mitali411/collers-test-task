import React from "react";
import { Card, Button } from "react-bootstrap";
import "../design/join.css"; 
import desktop from "../Images/Desktop.png"
import check from "../Images/check.png"
// import shape from "../Images/Rectangle 25 (3).png"
// import shape1 from "../Images/Rectangle 28.png"
// import shape2 from "../Images/Rectangle 30.png"

const Join = () => {
  return (
    <div className="join-section">
      <Card className="join-card">
        <Card.Body className="join-content">
          <div className="text-content">
            <h1 className="caption">Why join us</h1>
            <ul className="description">
  <li>
    <img src={check} alt="Check icon" className="check-icon" />
    Est et in pharetra magna adipiscing ornare aliquam.
  </li>
  <li>
    <img src={check} alt="Check icon" className="check-icon" />
    Tellus arcu sed consequat ac velit ut eu blandit.
  </li>
  <li>
    <img src={check} alt="Check icon" className="check-icon" />
    Ullamcorper ornare in et egestas dolor orci.
  </li>
</ul>
            <Button className="primary-button">Sign up now</Button>
          </div>
          <div className="image-content">
            {/* <img src={shape}></img>
            <img src={shape1}></img>
            <img src={shape2}></img> */}
            <img src={desktop} alt="Join us illustration" className="join-image" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Join;
