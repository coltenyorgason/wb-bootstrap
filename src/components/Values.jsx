import { Button, Card, Container, Col, Row} from "react-bootstrap";

function Value({ title, description, action }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button>{action}</Button>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container fluid>
      <Row>
        {values.map(({ title, description, action }, index) => (
          <Col key={index}>
            <Value
              key={index}
              title={title}
              description={description}
              action={action}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
