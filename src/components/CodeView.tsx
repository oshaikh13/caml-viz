import * as React from 'react';

import { 
  //Row,
  //Col,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText 
} from 'reactstrap';;

import PredictionLabel from '../utils/PredictionLabel';

export interface Props {
  predictionLabels: Array<PredictionLabel>
}

class CodeView extends React.Component<Props, object> {
  
  render () {
    const codeItems = this.props.predictionLabels.map((prediction, key) => 
      <ListGroupItem key={key} tag="a" href="#" action>
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