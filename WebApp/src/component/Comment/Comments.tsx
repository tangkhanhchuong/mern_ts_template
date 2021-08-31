import { connectToSocket } from '@root/hook/socket'
import React from 'react'
import { useEffect } from 'react'

import { CommentInput } from "./CommentInput/CommentInput"
import { CommentList } from './CommentList/CommentList'

interface Props {
    
}

const comments = [
    {
        id: "1",
        commentator: "Harry Kane",
        commentTime: "1 minute ago",
        content: "Con thấy môi của cô Lâm Vỹ Dạ có duyên lắm! Không biết tại sao cô Ninh Dương Lan Ngọc lại nói như vậy?"
    },
    {
        id: "2",
        commentator: "Ronaldo",
        commentTime: "1 minute ago",
        content: "Yêu mấy e quá cô giáo triệu cười  kg ngót luôn yêu tất cả mọi người ♥️♥️♥️♥️♥️😘😘😘😘"
    },
    {
        id: "3",
        commentator: "Salad",
        commentTime: "2 minutes ago",
        content: "Đã nghiện cn ngại nx"
    },
    {
        id: "4",
        commentator: "Mendy",
        commentTime: "1 hour ago",
        content: "Mình ghét 2 người khách mời vãi linh hồn"
    },
    {
        id: "5",
        commentator: "Mendy",
        commentTime: "1 hour ago",
        content: "Mình ghét 2 người khách mời vãi linh hồn"
    },
    {
        id: "6",
        commentator: "Mendy",
        commentTime: "1 hour ago",
        content: "Mình ghét 2 người khách mời vãi linh hồn"
    },
    {
        id: "7",
        commentator: "Mendy",
        commentTime: "1 hour ago",
        content: "Mình ghét 2 người khách mời vãi linh hồn Mình ghét 2 người khách mời vãi linh hồn Mình ghét 2 người khách mời vãi linh hồn Mình ghét 2 người khách mời vãi linh hồn Mình ghét 2 người khách mời vãi linh hồn Mình ghét 2 người khách mời vãi linh hồn Mình ghét 2 người khách mời vãi linh hồn"
    },
    {
        id: "8",
        commentator: "Mendy",
        commentTime: "1 hour ago",
        content: "Mình ghét 2 người khách mời vãi linh hồn"
    },
    {
        id: "9",
        commentator: "Mendy",
        commentTime: "1 hour ago",
        content: "Mình ghét 2 người khách mời vãi linh hồn"
    },
]

const Comments = (props: Props) => {
    useEffect(() => {
        connectToSocket()
    }, [])

    return (
        <div>
            <CommentInput />
            <CommentList comments={comments} />
        </div>
    )
}

export default Comments
