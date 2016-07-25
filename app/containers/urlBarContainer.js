import { connect } from 'react-redux'
import { changeImageURL } from '../ducks/image'
import URLBar from '../components/urlBar'

const mapStateToProps = (state) => {
  return {
    url: state.image.url
  }
}

const dispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(changeImageURL(e.target.value))
  }
}

export default connect(mapStateToProps, dispatchToProps)(URLBar)
