import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from "styled-components"

import { IComment } from '@root/model/comment'

interface Props {
    comment: IComment
}

const ST_Title = styled.div({
    color: "black"
})

export const CommentItem = ({ comment }: Props) => {
    const { commentator, commentTime, content } = comment

    return (
        <div className="row-start my-4">
            <Avatar className="bg-danger">C</Avatar>
            <div>
                <div className="row-start-center">
                    <div className="ml-2 font-weight-bold">{ commentator }</div>
                    <div className="ml-2">{ commentTime }</div>
                </div>
                <div className="ml-2">{ content }</div>
            </div>
        </div>
    )
}
