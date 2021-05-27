import { Action, TPost } from '../../types/types'
import {
    FETCH_POSTS_REQUESTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from './actions'

const fetchPostsRequest = (): Action => {
    return {
        type: FETCH_POSTS_REQUESTS
    }
}
const fetchPostsSuccess = (posts: TPost[]): Action => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}
const fetchPostFaliure = (error: string): Action => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPosts = () => {

    return async function (dispatch: any) {
        console.log("FETCH");
        dispatch(fetchPostsRequest())

        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {

                dispatch(fetchPostsSuccess(posts))
            })
            .catch(error => {
                dispatch(fetchPostFaliure(error.toString()))
            })


    }
}
