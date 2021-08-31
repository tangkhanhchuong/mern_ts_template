import { FC } from "react"

export type IReactProps<T> = T & React.HTMLAttributes<HTMLDivElement>

export interface ITopTabItemProps {
    id: string,
    label: string,
    component: FC
}