import { Card, Button } from "react-bootstrap";
import "../design/join.css";
import desktop from "../Images/Desktop.png"
import check from "../Images/check.png"
import shape1 from '../Images/Rectangle 28.png'
import shape2 from "../Images/Rectangle 30.png"

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
            <img src={shape1} style={{ position: "absolute", height: "85px", width: "84p", bottom: "66px", zIndex: 1, right: 340 }} />
            <img src={shape2} style={{ position: "absolute", height: "527px", width: "521px", right: "22px", top: "-66px" }} />
            <img src={desktop} alt="Join us illustration" className="join-image" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Join;
