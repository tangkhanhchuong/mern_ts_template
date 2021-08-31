<<<<<<< HEAD
import React from "react"
import styles from "styled-components"

import VideoItem from "./feature/video/VideoItem/VideoItem"
import { VideoThumbnailList } from "./feature/video/VideoThumbnail/VideoThumbnailList"

=======
import React, { useEffect, useState } from "react"
import styles from "styled-components"

import { IUserProps } from "@root/models"
import authRequest from "./core/http/authResponse"

import VideoItem from "./components/VideoItem/VideoItem"

>>>>>>> master
const videoData = [
	{
		id: "1",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
<<<<<<< HEAD
		thumbnailSource: "/storage/thumbnail_1.jpg",
=======
>>>>>>> master
		source: "/storage/video_2.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
<<<<<<< HEAD
		numberOfViews: 226472,
=======
		numberOfView: 226472,
>>>>>>> master
		type: "video/mp4"
	},
	{
		id: "2",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
<<<<<<< HEAD
		thumbnailSource: "/storage/thumbnail_2.jpg",
=======
>>>>>>> master
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
<<<<<<< HEAD
		numberOfViews: 226472,
=======
		numberOfView: 226472,
>>>>>>> master
		type: "video/mp4"
	},
	{
		id: "3",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
<<<<<<< HEAD
		thumbnailSource: "/storage/thumbnail_3.jpg",
=======
>>>>>>> master
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
<<<<<<< HEAD
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "4",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "5",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "6",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "7",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "8",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "9",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
		type: "video/mp4"
	},
	{
		id: "10",
		title: "Bản tin Troll Bóng Đá 24/8: Sân Man City dựng tượng huyền thoại | Fan Arsenal 'dựng ngược' Arteta",
		thumbnailSource: "/storage/thumbnail_3.jpg",
		source: "/storage/video1_v1.mp4",
		owner: "Troll Bóng đá",
		description: "Theo dõi Subcribe MIỄN PHÍ kênh Troll Bóng Đá tại: http://bit.ly/2IIB6Av\nTâm sự của Fan Arsenal | Troll Bóng Đá",
		publishedDate: "24-08-2021",
		numberOfViews: 226472,
=======
		numberOfView: 226472,
>>>>>>> master
		type: "video/mp4"
	}
]

<<<<<<< HEAD
const App = () => {
	return (
		<div className="row p-5 m-2 min-vh-100">
			<VideoItem video={videoData[0]} className="col-8 pr-4" /> 
			<VideoThumbnailList videos={videoData} className="col-4 pl-4"/>
		</div>
=======
const PageContainer = styles.div({
	minHeight: "120vh"
})

function App() {
	return (
		<PageContainer>
			<VideoItem video={videoData[0]} />
		</PageContainer>
>>>>>>> master
	)
}

export default App
