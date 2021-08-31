import React from 'react'
import { IconType } from 'react-icons'
import { Button } from "@material-ui/core"

import { gIconSize } from '@root/constant/common'

interface Props {
    Icon: IconType,
    action: string,
    variant?: "contained" | "outlined" | "text"
}

export const IconAction = (props: Props) => {
    const { Icon, action, variant } = props
    
    return (
        <Button
            variant={variant || "outlined"}
            className="mx-1"
            startIcon={<Icon size={gIconSize} />}
        >
            { action }
        </Button>
    )
}
