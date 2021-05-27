import { CSSProperties, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostsState, TPost, Comment, User as TUser } from '../../types/types'
import { CLOSE_SHOWCASE } from '../redux/actions'
import { deletePost } from '../redux/deletePost.action'
import './Modal.style.css'

import Comments from './Comments'
import User from './User'

const Modal = () => {

    const dispatch = useDispatch()
    const showcase = useSelector<PostsState, TPost | null>((state) => state.showcase)

    const closeModal = () => dispatch({ type: CLOSE_SHOWCASE })

    const handleDeletePost = (postId: number) => {
        console.log("deletePost");
        dispatch(deletePost(postId))
        closeModal()
    }



    const [user, setUser] = useState<TUser | null>(null)
    const [comments, setComments] = useState<Comment[]>([])


    useEffect(() => {
        const fetchUser = async () => {
            const url = `https://jsonplaceholder.typicode.com/users/${showcase?.id}`
            await fetch(url)
                .then(res => res.json())
                .then(u => {
                    console.log('USE', u);
                    setUser(u)
                })

        }
        const fetchComments = async () => {
            const url = `https://jsonplaceholder.typicode.com/posts/${showcase?.id}/comments`
            await fetch(url)
                .then(res => res.json())
                .then(c => setComments(c))
        }
        if (showcase) {
            fetchUser()
            fetchComments()
        }

    }, [showcase])

    return (
        showcase ?
            <div className="modal_wrapper" onClick={() => closeModal()}>
                <article style={style(showcase.id)} onClick={(e) => e.stopPropagation()}>

                    <User user={user} />

                    <div className="modal_content">
                        <h3>{showcase.title}</h3>
                        <p> {showcase.body + showcase.body + showcase.body} </p>
                    </div>


                    <Comments comments={comments} />

                    <div className="delete_btn" onClick={() => handleDeletePost(showcase.id)}>
                        delete post
                    </div>
                </article>
            </div>
            : <></>
    )
}

const style = (ID: number): CSSProperties => {
    return {
        borderLeft: `1em solid hsl(${ID * Math.PI}, 42%, 60%)`
    }
}

export default Modal
