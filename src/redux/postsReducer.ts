import { PostsState, Action } from '../../types/types'
import {
    FETCH_POSTS_REQUESTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    SHOW_MORE,
    SET_SHOWCASE,
    CLOSE_SHOWCASE,
    CREATE_POST_FAILURE,
    CREATE_POST_SUCCESS,
    CREATE_POST_REQUESTS,
    DELETE_POST_SUCCESS,
    DELETE_POST_REQUESTS,
    DELETE_POST_FAILURE
} from './actions'


const INITIAL_STATE = {
    loading: false,
    posts: [],
    showcase: null,
    showing: 10,
    error: ''
}

export const postsReducer = (state: PostsState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        // FETCH ---------------------
        case FETCH_POSTS_REQUESTS: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        }
        case FETCH_POSTS_FAILURE: {
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        }

        // CREATE ---------------------
        case CREATE_POST_REQUESTS: {
            return {
                ...state,
                loading: true
            }
        }
        case CREATE_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: [action.payload, ...state.posts],
                error: ''
            }
        }
        case CREATE_POST_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }


        // DELETE ---------------------
        case DELETE_POST_REQUESTS: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_POST_SUCCESS: {

            const copy = [...state.posts]
            const deleteId = copy.findIndex((p) => p.id === action.payload)

            copy.splice(deleteId, 1)

            return {
                ...state,
                loading: false,
                posts: copy,
                error: ''
            }
        }
        case DELETE_POST_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }



        case SET_SHOWCASE: {
            return {
                ...state,
                showcase: action.payload
            }
        }
        case CLOSE_SHOWCASE: {
            return {
                ...state,
                showcase: null
            }
        }
        case SHOW_MORE: {
            return {
                ...state,
                showing: state.showing + 10
            }
        }

        default: return state
    }
}
