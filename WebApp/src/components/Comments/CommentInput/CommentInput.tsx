import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, FormControl, Input } from '@material-ui/core'
import { brown } from '@material-ui/core/colors'

interface Props {
    
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "30px"
    },
    numComments: {
        fontSize: "16px"
    },
    inputField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    brown: {
        color: theme.palette.getContrastText(brown[500]),
        backgroundColor: brown[500],
    }, 
    input: {
        flex: "1",
        marginLeft: theme.spacing(2)
    },
    actionField: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
}))

const CommentInput = (props: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const styledClass = useStyles()
    const { root, numComments, brown, inputField, input, button, actionField } = styledClass

    return (
        <FormControl fullWidth className={root}>
            <div className={numComments}>
                335 Comments
            </div>
            <br />
            <div className={inputField}>
                <Avatar className={brown}>C</Avatar>
                <Input
                    id="standard-adornment-amount"
                    onChange={() => {}}
                    onFocus={() => setShow(true)}
                    placeholder="Comment publicly..."
                    className={input}
                />
            </div>
            {
                show ?
                <div className={actionField}>
                    <Button className={button} onClick={() => setShow(false)}>
                        cancel
                    </Button>
                    <Button variant="contained" className={button}>
                        comment
                    </Button>
                </div> : <></>
            }   

        </FormControl>
    )
}

export default CommentInput
