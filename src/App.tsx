import * as React from 'react';
import CodeView from './components/CodeView';
import ClinicalNotesView from './components/ClinicalNotesView';
import { Container, Row, Col } from 'reactstrap';
import PredictionLabel from './utils/PredictionLabel';
import { getCodedKGrams } from './actions/clinicalNotes'
import note from './consts';

interface AppState { 
  predictionLabels: Array<PredictionLabel>
};

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      predictionLabels: []
    }
    this.updatePredictionLabelState = this.updatePredictionLabelState.bind(this)

  }

  componentDidMount() {
    getCodedKGrams(note).then((response) => {
      console.log(response)
      let predictionLabels = response.data;
      this.setState({predictionLabels})
    })

  }

  updatePredictionLabelState (newPredictionLabels: Array<PredictionLabel>) {
    this.setState({predictionLabels: newPredictionLabels});
  }

  public render() {

    return (
      <Container fluid={true}>
        <Row>
          <Col style={{padding: 0}}>
            <ClinicalNotesView predictionLabels={this.state.predictionLabels}/>
          </Col>
          <Col style={{padding: 0}}>
            <CodeView updatePredictionLabelState={this.updatePredictionLabelState} 
                      predictionLabels={this.state.predictionLabels}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
