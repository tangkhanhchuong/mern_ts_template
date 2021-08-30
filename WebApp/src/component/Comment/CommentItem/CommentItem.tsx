import React from 'react'
import { Avatar, Input, makeStyles, Typography } from '@material-ui/core'
import { brown } from '@material-ui/core/colors'
import { IComment } from '@root/model/comment'

interface Props {
    comment: IComment
}

const useStyles = makeStyles((theme) => ({
    StRoot: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: "10px"
    },
    StBrown: {
        color: theme.palette.getContrastText(brown[500]),
        backgroundColor: brown[500],
        marginRight: "10px"
    },
    StTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        height: "25px"
    }, 
    StCommentator: {
        fontWeight: "bold",
    },
    StCommentTime: {
        color: 'gray',
        marginLeft: "10px"
    },
    StContent: {
        
    }
}))

export const CommentItem = ({ comment }: Props) => {
    const { commentator, commentTime, content } = comment

    const styledClass = useStyles()
    const { StRoot, StBrown, StTitle, StContent, StCommentator, StCommentTime } = styledClass

    return (
        <div className={StRoot}>
            <Avatar className={StBrown}>C</Avatar>
            <div>
                <div className={StTitle}>
                    <p className={StCommentator}>{ commentator }</p>
                    <p className={StCommentTime}>{ commentTime }</p>
                </div>
                <p className={StContent}>{ content }</p>
            </div>
        </div>
    )
}
