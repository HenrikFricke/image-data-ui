import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class URLBar extends React.Component {
  render() {
    const { url, handleChange } = this.props
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Image-URL:</ControlLabel>
          <FormControl
            type="text"
            value={url}
            placeholder="Paste URL to an image..."
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
      </form>
    )
  }
}

export default URLBar
