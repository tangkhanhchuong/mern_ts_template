import React from "react"

import { ITopTabItemProps } from "@root/model"
import Comments from "@root/component/Comment/Comments"

import VideoOverview from "../VideoOverview/VideoOverview"

const Tab2 = () => (
    <div>Channel Tab</div>
)

export const videoTabItems: ITopTabItemProps[] = [
    {
        id: "0",
        label: "overview",
        component: VideoOverview
    },
    {
        id: "1",
        label: "chanel",
        component: Tab2
    },
    {
        id: "2",
        label: "comments",
        component: Comments
    }
]