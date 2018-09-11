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
      text: 'hello. one two lal la la three four la la la five six humpty dumpty'
    }
  }


  kgramSplitter(source: string, find: Array<PredictionLabel>) {

    const stringLabels = find.reduce((prev, curr) => {
      if (!prev[curr.kgram]) {
        prev[curr.kgram] = [];
      }
      prev[curr.kgram].push(curr);
      return prev;
    }, {});

    let result:any = [];
    let runningString = "";

    sourceLoop:
    for (let i = 0; i < source.length; ++i) {
      for (let key in stringLabels) {
        let substring = source.substring(i, i + key.length);
        if (stringLabels[substring]) {
          result.push(runningString);
          result.push([i, stringLabels[substring]]);
          i += key.length;
          runningString = " ";
          continue sourceLoop;
        }  
      }

      runningString += source.charAt(i);

    }

    if (runningString != " ") result.push(runningString);

    return result;

  }

  render() {
    console.log("render")
    const splittedText = this.kgramSplitter(this.state.text, this.props.predictionLabels);
    console.log(splittedText);
    return (
      <Container fluid={true}>
        <Row style={{paddingTop: 10}}>
          <Col>
            <p>
              {splittedText.map((element: any) => (typeof element === "string" ? element : "tool tip"))}
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

