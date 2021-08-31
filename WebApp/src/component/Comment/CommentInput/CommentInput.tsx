import React, { useState } from 'react'
import { Avatar, Button, FormControl, Input } from '@material-ui/core'

interface Props {
    
}

export const CommentInput = (props: Props) => {
    const [isShowed, setIsShowed] = useState<boolean>(false)
    
    return (
        <FormControl fullWidth className="mb-3">
            <p className="h5">
                335 Comments
            </p>
            <br />
            <div className="d-flex flex-row justify-content-start">
                <Avatar className="bg-danger">C</Avatar>
                <Input
                    className="flex-grow-1 ml-3"
                    id="standard-adornment-amount"
                    onChange={() => {}}
                    onFocus={() => setIsShowed(true)}
                    placeholder="Comment publicly..."
                />
            </div>
            {
                isShowed ?
                <div className="row-end-center">
                    <Button className="mt-2" onClick={() => setIsShowed(false)}>
                        cancel
                    </Button>
                    <Button className="mt-2" variant="contained">
                        comment
                    </Button>
                </div> : <></>
            }   

        </FormControl>
    )
}
