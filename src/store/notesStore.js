import React from 'react'

const initState = {
  post: [
    { id: 1, content: 'gà bò heo' },
    { id: 2, content: 'sushi bbq hot-pot' },
    { id: 3, content: 'hamburger, ice cream, abcxyz' },
  ],
}

const notesReducer = (state = initState, action) => {
  const { type, data } = action
  switch (type) {
    case 'ADD':
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: state.post[state.post.length - 1]['id'] + 1,
            content: action.content,
          },
        ],
      }
    case 'DELETE':
      let newPosts = state.post.filter((i) => i.id !== action.id + 1)
      return { ...state, post: newPosts }
    case 'EDIT':
      return {}
    default:
      return state
  }
}

export default notesReducer
