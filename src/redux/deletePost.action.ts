import { Action, TPost } from "../../types/types";
import { DELETE_POST_FAILURE, DELETE_POST_REQUESTS, DELETE_POST_SUCCESS } from "./actions";

export const deletePost = (postId: number) => {

    return async function (dispatch: any) {
        console.log("DELETE");
        dispatch(deletePostRequest())
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        }).then((res) => res.json())
            .then(post => {
                dispatch(deletePostSuccess(postId))
            })
            .catch(error => {
                dispatch(deletePostFaliure(error.toString()))
            })
    }

}
const deletePostRequest = (): Action => {
    return {
        type: DELETE_POST_REQUESTS
    }
}
const deletePostSuccess = (postId: number): Action => {
    return {
        type: DELETE_POST_SUCCESS,
        payload: postId
    }
}
const deletePostFaliure = (error: string): Action => {
    return {
        type: DELETE_POST_FAILURE,
        payload: error
    }
}
