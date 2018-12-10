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
    const wordsToHighlight = Array<string>();
    this.props.predictionLabels.forEach((label) => {
      if (label.highlighted) {
        label.kgram.forEach((word) => {
          var nextWord = word;
          if (nextWord.length == 1) {
            nextWord = " " + nextWord + " ";
          }
          if (!wordsToHighlight.includes(nextWord)) wordsToHighlight.push(nextWord);
        }) 
      }
    });

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

