import React from 'react'
import { IconType } from 'react-icons'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import { gIconSize } from '@root/constants/common'

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(1),
    },
}))

interface Props {
    Icon: IconType,
    action: string,
    variant?: "contained" | "outlined" | "text"
}

const IconAction = (props: Props) => {
    const { Icon, action, variant } = props
    const classes = useStyles()
    
    return (
        <Button
            variant={variant || "outlined"}
            className={classes.button}
            startIcon={<Icon size={gIconSize} />}
        >
            { action }
        </Button>
    )
}

export default IconAction
