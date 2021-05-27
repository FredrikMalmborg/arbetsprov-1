import { useEffect } from 'react'

import "./Posts.style.css"
import { TPost, PostsState } from '../../types/types'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/fetchPosts.action'

const Posts = () => {

    const dispatch = useDispatch()
    const { posts, showing, loading } = useSelector<PostsState, PostsState>((state) => state)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    console.log(posts)
    return (
        <div className="postWrapper">
            {!loading && posts.slice(0, showing).map(
                (post: TPost) => <Post key={`${post.id}`} post={post} />)
            }
        </div>
    )
}


export default Posts
