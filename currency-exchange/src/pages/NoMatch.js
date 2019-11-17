import React from "react";
import { Col, Row, Container,Jumbotron } from 'reactstrap';
// import Footer  from '../components/footer';


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <h3> In other words, you don messed up A-a-ron</h3>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
