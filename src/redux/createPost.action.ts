import { Action, TPost } from "../../types/types";
import { CREATE_POST_FAILURE, CREATE_POST_REQUESTS, CREATE_POST_SUCCESS } from "./actions";

export const createPost = (newPost: { title: string, body: string }) => {

    return async function (dispatch: any) {
        console.log("CREATE");
        const { body, title } = newPost
        dispatch(createPostRequest())

        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: Math.round(Math.random() * 50),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then(post => {
                console.log("SUCCESS", post);

                dispatch(createPostSuccess(post))
            })
            .catch(error => {
                dispatch(createPostFaliure(error.toString()))
            })
    }
}
const createPostRequest = (): Action => {
    return {
        type: CREATE_POST_REQUESTS
    }
}
const createPostSuccess = (post: TPost): Action => {
    console.log("new post", post);

    return {
        type: CREATE_POST_SUCCESS,
        payload: post
    }
}
const createPostFaliure = (error: string): Action => {
    return {
        type: CREATE_POST_FAILURE,
        payload: error
    }
}
