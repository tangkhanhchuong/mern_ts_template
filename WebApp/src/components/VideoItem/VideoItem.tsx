import React, { FC, ChangeEvent } from "react"
import { FaThumbsUp, FaThumbsDown, FaShare, FaSave } from "react-icons/fa"

import { IVideoProps } from "@root/models"
import { NumberFormatter } from "@root/utils/formatter"

import { TopTab } from "../TopTab/TopTab"
import { videoTabItems } from "./videoTabItems"
import IconAction from "../IconAction/IconAction"
import { 
    StActions, StVideo, 
    StVideoContainer, StVideoSubTitleContainer, 
    StVideoTitle1, StVideoTitle2 
} from "./Video.style"

const { REACT_APP_SYSTEM_URL } = process.env

const Video: FC<{ video: IVideoProps }> = ({ video }) => {

    const { title, source, owner, description, numberOfView, publishedDate, type } = video
    const fullSource: string = `${REACT_APP_SYSTEM_URL}${source}`

    return (
        <StVideoContainer>
            <StVideo autoPlay controls muted>
                <source src={fullSource} type={type} />
            </StVideo>
            <StVideoTitle1>{ title }</StVideoTitle1>
            <StVideoSubTitleContainer>
                <StVideoTitle2>{ NumberFormatter.toLocaleString(numberOfView) } viewers • { publishedDate }</StVideoTitle2>
                <StActions>
                    <IconAction Icon={FaThumbsUp} action="5000" />
                    <IconAction Icon={FaThumbsDown} action="50" />
                    <IconAction Icon={FaShare} action="share" />
                    <IconAction Icon={FaSave} action="save" />   
                </StActions>
            </StVideoSubTitleContainer>
            <br />
            <TopTab items={videoTabItems} />
        </StVideoContainer>
    )   
}

export default Video