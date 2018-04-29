const initialState = {
  questions: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_QUESTIONS':
      return { questions: action.questions }
    default:
      return state
  }
}
