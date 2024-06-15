import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/facebook-icon.png";
import navIcon2 from "../assets/instagram.png";
import navIcon3 from "../assets/youtube.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <img src={navIcon1} alt="Icon" />
              <img src={navIcon2} alt="Icon" />
              <img src={navIcon3} alt="Icon" />
            </div>
            <p>Copyright @2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;