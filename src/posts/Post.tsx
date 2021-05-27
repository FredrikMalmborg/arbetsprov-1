import { CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { TPost } from '../../types/types'
import { SET_SHOWCASE } from '../redux/actions';

interface Props {
    post: TPost
}

const Post = ({ post }: Props) => {


    const dispatch = useDispatch()

    const handleCardClick = async () => {
        console.log("OPEN");

        dispatch({
            type: SET_SHOWCASE,
            payload: post
        })
    }

    return (
        <div className="post" onClick={() => handleCardClick()} style={postStyle(post.id)}>
            <h3 className="title">{post.title}</h3>
            <p className="body"> {post.body}</p>
        </div>
    )
}

const postStyle = (ID: number): CSSProperties => {
    return {
        background: `hsl(${ID * Math.PI}, 42%, 60%)`
    }
}

export default Post
