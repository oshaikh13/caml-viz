import * as React from 'react';

import { 
  //Row,
  //Col,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText 
} from 'reactstrap';;

export interface Props {
  codes: Array<any>
}

class CodeView extends React.Component<Props, object> {
  
  render () {
    const codeItems = this.props.codes.map((code, key) => 
      <ListGroupItem key={key} tag="a" href="#" action>
        <ListGroupItemHeading>{code.id}</ListGroupItemHeading>
        <ListGroupItemText>
          {code.message}
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