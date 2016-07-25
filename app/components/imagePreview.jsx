import React from 'react'
import { Image } from 'react-bootstrap'

class ImagePreview extends React.Component {
  render() {
    const { url } = this.props
    return (
      <Image src={url} rounded responsive />
    )
  }
}

export default ImagePreview
