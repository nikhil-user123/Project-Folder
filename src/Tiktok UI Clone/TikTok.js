import React, { useEffect, useState } from 'react'
import Video from './video'
import './TikTok.css'
import './index1.css'

const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'

export default function  Project3() {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		fetch(API_URL)
			.then((data) => data.json())
			.then((data) => setVideos(data))
	}, [])

	return (
		<div className="app">
			<div className="containerT">
				{videos.map((video) => {
					return (
						<Video
							key={video.url}
							channel={video.channel}
							description={video.description}
							song={video.song}
							likes={video.likes}
							shares={video.shares}
							messages={video.messages}
							url={video.url}
						/>
					)
				})}
			</div>
		</div>
	)
}
