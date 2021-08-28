import React from "react"

import { ITopTabItemProps } from "@root/models"
import Comments from "../Comments/Comments"
import VideoOverview from "../VideoOverview/VideoOverview"

const Tab1 = () => (
    <>Overview Tab</>
)

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