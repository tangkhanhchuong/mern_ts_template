import React, { FC, ChangeEvent } from "react"
import SwipeableViews from "react-swipeable-views"
import { AppBar, Tabs, Tab } from "@material-ui/core"

import { ITopTabItemProps } from "@root/model"
import { TabComponent } from "./TabComponent"
import { useStyles } from './TopTab.style'

const a11yProps = (index: number) => {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    }
}

export const TopTab: FC<{ items: ITopTabItemProps[] }> = ({ items }) => {
    const [value, setValue] = React.useState(0)
    const styleClasses = useStyles()

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index: number) => {
        setValue(index)
    }

    return (
        <div className={styleClasses.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {
                        items.map((item: ITopTabItemProps, index: number) => (
                            <Tab key={item.id} label={item.label} {...a11yProps(index)} />)
                        )
                    }
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    items.map((item: ITopTabItemProps, index: number) => (
                        <TabComponent key={item.id} value={value} index={index}>
                            <item.component />
                        </TabComponent> 
                    ))
                }
            </SwipeableViews>
        </div>
    )
}
