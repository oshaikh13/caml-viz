import * as React from 'react';

import PredictionLabel from '../utils/PredictionLabel';
import { Container, Row, Col } from 'reactstrap';

export interface Props {
  predictionLabels: Array<PredictionLabel>
}

export interface State {
  text: string
}

export default class ClinicalNotesView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      text: 'la di la, la di la di la...'
    }
  }

  render() {
    return (
      <Container fluid={true}>
        <Row style={{paddingTop: 10}}>
          <Col>
            <p>
              {this.state.text}
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

