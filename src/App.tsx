import * as React from 'react';
import CodeView from './components/CodeView';
import ClinicalNotesView from './components/ClinicalNotesView';
import { Container, Row, Col } from 'reactstrap';
import PredictionLabel from './utils/PredictionLabel';
import { getCodedKGrams } from './actions/clinicalNotes'

interface AppState { 
  predictionLabels: Array<PredictionLabel>
};

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      predictionLabels: []
    }
  }

  componentDidMount() {
    getCodedKGrams("this does nothing")
    const predictionLabels = 
      [
        {
          code: "012.84", 
          codeDescription: "Other specified respiratory tuberculosis, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
          kgram: "one two"
        },
        {
          code: "41.4", 
          codeDescription: "Excision or destruction of lesion or tissue of spleen",
          kgram: "three four"

        },
        {
          code: "41.4", 
          codeDescription: "Right bundle branch block and left posterior fascicular block",
          kgram: "five six"
        },
    ]
    this.setState({predictionLabels})
  }

  public render() {

    return (
      <Container fluid={true}>
        <Row>
          <Col style={{padding: 0}}>
            <ClinicalNotesView predictionLabels={this.state.predictionLabels}/>
          </Col>
          <Col style={{padding: 0}}>
            <CodeView predictionLabels={this.state.predictionLabels}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
