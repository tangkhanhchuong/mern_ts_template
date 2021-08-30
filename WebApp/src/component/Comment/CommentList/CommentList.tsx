import { IComment } from '@root/model/comment'
import React from 'react'

import { CommentItem } from '../CommentItem/CommentItem'

interface Props {
    comments: IComment[];
}

export const CommentList = ({ comments }: Props) => {
    return (
        <>
            {
                comments.map(comment => (
                    <CommentItem comment={comment} key={comment.id}/>
                ))
            }
        </>
    )
}
