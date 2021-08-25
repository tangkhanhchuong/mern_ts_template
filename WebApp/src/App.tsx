import React, { useEffect, useState } from "react"
import styles from "styled-components"

import { IUserProps } from "@root/models"
import authRequest from "./core/http/authResponse"

import VideoItem from "./components/VideoItem/VideoItem"

const videoData = [
	{
		id: "1",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		source: "/storage/video_2.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfView: 226472,
		type: "video/mp4"
	},
	{
		id: "2",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfView: 226472,
		type: "video/mp4"
	},
	{
		id: "3",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfView: 226472,
		type: "video/mp4"
	}
]

const PageContainer = styles.div({
	minHeight: "120vh"
})

function App() {
	return (
		<PageContainer>
			<VideoItem video={videoData[0]} />
		</PageContainer>
	)
}

export default App
