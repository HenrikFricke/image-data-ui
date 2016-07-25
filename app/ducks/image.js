// Initial state
const initialState = {
  url: "https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=29a9bb29bcbf19a5954d0110b19d5b51"
}

// Actions
const CHANGE_IMAGE_URL = 'imgData/image/CHANGE_IMAGE_URL'

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_IMAGE_URL:
      return Object.assign({}, state, {
        url: action.url
      })
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function changeImageURL(url) {
  return { type: CHANGE_IMAGE_URL, url: url };
}
