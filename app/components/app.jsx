import React from 'react'
import TitleBar from './titleBar'
import Footer from './footer'
import URLBarContainer from '../containers/urlBarContainer'
import ImagePreviewContainer from '../containers/imagePreviewContainer'
import { Grid, Row } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <TitleBar />
        </Row>
        <Row>
          <URLBarContainer />
        </Row>
        <Row>
          <ImagePreviewContainer />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
    )
  }
}

export default App
