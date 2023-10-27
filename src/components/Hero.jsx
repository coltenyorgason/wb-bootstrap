import { Container, Row, Col } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
    <Container className="text-center py-5" >
      <Row>
        <Col>
          <h1>{title}</h1>
          <p>{lead}</p>
        </Col>
      </Row>
    </Container>
  );
}
