import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from './redux/createPost.action'
import Btn from './components/Btn'
import './CreatePost.style.css'
import './posts/Posts.style.css'

const CreatePost = () => {


    const dispatch = useDispatch()

    const [values, setValues] = useState({
        title: '',
        body: ''
    })

    const handleValueChange = (value: string, anchor: string) => {
        setValues({
            ...values,
            [anchor]: value
        })
    }

    const clearValues = () => setValues({
        title: '',
        body: ''
    })

    const handlePostNewPost = () => {

        dispatch(createPost({
            title: values.title,
            body: values.body
        }))

        clearValues()
    }

    return (
        <div className="form_container">

            <input
                type="text"
                className="title"
                name="title"
                placeholder="Title"
                value={values.title}
                onChange={(e) => handleValueChange(e.target.value, "title")} />
            <textarea
                name="body"
                className="body"
                placeholder="content"
                cols={40}
                rows={12}
                value={values.body}
                onChange={(e) => handleValueChange(e.target.value, "body")} />

            <div className="button">
                <Btn label="SEND" onClick={handlePostNewPost} disabled={values.body === "" || values.title === ""} />
            </div>

        </div>
    )
}
export default CreatePost
