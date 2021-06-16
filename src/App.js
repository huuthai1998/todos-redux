import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const noteRender = (notes, callback) => {
  console.log(notes)
  return notes.map((note, key) => {
    return (
      <div
        key={key}
        className="text-white mx-10 rounded-lg border-gray-300 border p-6"
      >
        <h1 className="font-bold text-xl">{note.content}</h1>
        <div className="flex justify-end pt-10">
          <button className="" onClick={callback(key)}>
            Delete
          </button>
        </div>
      </div>
    )
  })
}

const App = () => {
  const state = useSelector((i) => i.post)
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const handleDelete = (id) => (e) => {
    dispatch({ type: 'DELETE', id })
  }
  const handleAdd = () => {
    dispatch({ type: 'ADD', content })
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget
    switch (name) {
      case 'content':
        setContent(value)
    }
  }
  return (
    <div className="bg-gray-800 h-screen text-white">
      <div className="px-10 pt-32 flex-grow w-full rounded-lg">
        <div className="border border-gray-300">
          <textarea
            onChange={onChangeHandler}
            name="content"
            className="flex flex-grow outline:none w-full bg-gray-800 p-1 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Take a note..."
          ></textarea>
          <div className="flex justify-end pt-10 p-6">
            <button className="" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-10 pt-32">{noteRender(state, handleDelete)} </div>
    </div>
  )
}

export default App
