import * as React from 'react';

import { 
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText 
} from 'reactstrap';;

import PredictionLabel from '../utils/PredictionLabel';

export interface Props {
  predictionLabels: Array<PredictionLabel>,
  updatePredictionLabelState: Function
}

class CodeView extends React.Component<Props, object> {
  
  codeClicked(code: string) {
    console.log("clicked " + code);
    this.props.predictionLabels.forEach((label) => {
      if (label.code == code) label.highlighted = !label.highlighted;
    })
    this.props.updatePredictionLabelState(this.props.predictionLabels);
  }

  render () {
    const codeItems = this.props.predictionLabels.map((prediction, key) => 
      <ListGroupItem onClick={() => this.codeClicked(prediction.code)} key={key} tag="a" action>
        <ListGroupItemHeading>{prediction.code}</ListGroupItemHeading>
        <ListGroupItemText>
          {prediction.codeDescription}
        </ListGroupItemText>
      </ListGroupItem>
    );  

    return (

      <ListGroup>
        {codeItems}
      </ListGroup>

    );
  }

}

export default CodeView;