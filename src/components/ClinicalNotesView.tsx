import ReactQuill from 'react-quill';
import * as React from 'react';

export interface Props {
}

interface State {
  text: string
}

export default class ClinicalNotesView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value: string) {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
    )
  }
}

