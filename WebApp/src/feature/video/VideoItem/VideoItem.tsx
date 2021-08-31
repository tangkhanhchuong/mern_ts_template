import React, { FC } from "react"
import { FaThumbsUp, FaThumbsDown, FaShare, FaSave } from "react-icons/fa"
import { Typography } from "@material-ui/core"

import { IReactProps, IVideoProps } from "@root/model"
import { NumberFormatter } from "@root/util/formatter"
import { TopTab } from "@root/component/TopTab/TopTab"
import { IconAction } from "@root/component/IconAction/IconAction"
import { buildSystemUrl } from "@root/util/url"

import { videoTabItems } from "./videoTabItems"

const Video: FC<IReactProps<{ video: IVideoProps}>> = ({ video, className }) => {
    const { title, source, owner, description, numberOfViews, publishedDate, type } = video
    return (
        <div className={className}>
            <video className="w-100" autoPlay controls muted>
                <source src={buildSystemUrl(source)} type={type} />
            </video>
            <Typography variant="h5" component="h1" className="my-2">{ title }</Typography>
            <div className="row-between-center my-1">
                <div className="text-muted">{ NumberFormatter.toLocaleString(numberOfViews) } viewers • { publishedDate }</div>
                <div>
                    <IconAction Icon={FaThumbsUp} action="1000" />
                    <IconAction Icon={FaThumbsDown} action="50" />
                    <IconAction Icon={FaShare} action="share" />
                    <IconAction Icon={FaSave} action="save" />   
                </div>
            </div>
            <br />
            <TopTab items={videoTabItems} />
        </div>
    )   
}

export default Video