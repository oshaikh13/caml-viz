import * as React from 'react';
import CodeView from './components/CodeView';
import ClinicalNotesView from './components/ClinicalNotesView';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
  public render() {

    return (
      <Container fluid={true}>
        <Row>
          <Col style={{padding: 0}}>
            <ClinicalNotesView />
          </Col>
          <Col style={{padding: 0}}>
            <CodeView codes={[
              {
                id: "012.84", 
                message: "Other specified respiratory tuberculosis, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture"
              },
              {
                id: "41.4", 
                message: "Excision or destruction of lesion or tissue of spleen"
              },
              {
                id: "426.51", 
                message: "Right bundle branch block and left posterior fascicular block"
              },
            ]}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
