import React from 'react'

import { Comment } from '../../types/types'

interface Props {
    comments: Comment[]
}

const Comments = ({ comments }: Props) => {
    return (
        <>
            <p>Comments</p>
            <hr />
            <div className="comments">
                {comments.length > 0 ? comments.map((comment, i) =>
                    <div key={i + comment.postId}>
                        <h5>
                            {comment.name}
                            <br />
                            by <em>{comment.email}</em>
                        </h5>

                        <p>
                            {comment.body}
                        </p>
                    </div>)
                    : "no comments"}
            </div>
        </>
    )
}
export default Comments
