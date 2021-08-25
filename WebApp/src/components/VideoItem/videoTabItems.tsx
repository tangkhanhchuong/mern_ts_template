import React from "react"
import { ITopTabItemProps } from "@root/models"

const Tab1 = () => (
    <>Overview Tab</>
)

const Tab2 = () => (
    <>Channel Tab</>
)

const Tab3 = () => (
    <>Comments Tab</>
)

export const videoTabItems: ITopTabItemProps[] = [
    {
        id: "0",
        label: "overview",
        component: Tab1
    },
    {
        id: "1",
        label: "chanel",
        component: Tab2
    },
    {
        id: "2",
        label: "comments",
        component: Tab3
    }
]