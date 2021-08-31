import React, { FC, ChangeEvent } from "react"
import styles from "styled-components"

import { IVideoProps } from "@root/models"
import { NumberFormatter } from "@root/utils/formatter"

import { TopTab } from "../TopTab/TopTab"
import { videoTabItems } from "./videoTabItems"

const { REACT_APP_SYSTEM_URL } = process.env

const StVideoContainer = styles.div({
    width: "700px",
    margin: "20px",
    marginLeft: "130px"
})

const StVideo = styles.video({
    width: "100%"
})

const StVideoTitle1 = styles.div({
    fontWeight: "bold",
    fontSize: "26px",
    marginTop: "10px"
})

const StVideoTitle2 = styles.div({
    color: "#888788",
    marginTop: "15px",
    marginBottom: "15px",
    paddingBottom: "15px",
    borderBottom: "1px solid lightgray"
})

const Video: FC<{ video: IVideoProps }> = ({ video }) => {

    const { title, source, owner, description, numberOfView, publishedDate, type } = video

    const fullSource: string = `${REACT_APP_SYSTEM_URL}${source}`

    const [value, setValue] = React.useState(2)

	const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
		setValue(newValue)
	}

    return (
        <StVideoContainer>
            <StVideo controls>
                <source src={fullSource} type={type} />
            </StVideo>
            <StVideoTitle1>{ title }</StVideoTitle1>
            <StVideoTitle2>{ NumberFormatter.toLocaleString(numberOfView) } viewers • { publishedDate }</StVideoTitle2>
            <TopTab items={videoTabItems} />
        </StVideoContainer>
    )   
}

export default Video