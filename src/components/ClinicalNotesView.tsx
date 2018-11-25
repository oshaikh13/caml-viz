import * as React from 'react';

import PredictionLabel from '../utils/PredictionLabel';
import Highlighter from "react-highlight-words";
import { Container, Row, Col } from 'reactstrap';
import note from '../consts';

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
      text: note
    }
  }

  render() {
    console.log("render")
    const wordsToHighlight = this.props.predictionLabels.reduce((curr, next) => {
      if (next.highlighted && !curr.includes(next.kgram)) curr.push(next.kgram);
      return curr;
    }, Array<string>())

    return (
      <Container fluid={true}>
        <Row style={{paddingTop: 10}}>
          <Col>
            <Highlighter
              searchWords={wordsToHighlight}
              autoEscape={true}
              textToHighlight={this.state.text}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

