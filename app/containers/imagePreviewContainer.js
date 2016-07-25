import React from 'react'
import { connect } from 'react-redux'
import ImagePreview from '../components/ImagePreview'

const mapStateToProps = (state) => {
  return {
    url: state.image.url
  }
}

export default connect(mapStateToProps)(ImagePreview)
