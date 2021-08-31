import React, { FC } from 'react'

import { IReactProps, IVideoProps } from '@root/model'
import { VideoThumbnail } from './VideoThumbnail'

export const VideoThumbnailList: FC<IReactProps<{ videos: IVideoProps[] }>> = ({ videos, className }) => {

    return (
        <div className={className}>
            {
                videos.map(video => (
                    <VideoThumbnail video={video} key={video.id} />
                ))
            }
        </div>
    )
}


