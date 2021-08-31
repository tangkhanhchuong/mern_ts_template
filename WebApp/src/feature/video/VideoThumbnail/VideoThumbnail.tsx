import React, { FC } from 'react'

import { buildSystemUrl } from '@root/util/url'
import { IVideoProps } from "@root/model"

export const VideoThumbnail: FC<{ video: IVideoProps }> = ({ video }) => {
    const { thumbnailSource, title, numberOfViews, publishedDate, owner } = video

    return (
        <div className="cursor-pointer">
            <img src={buildSystemUrl(thumbnailSource)} alt={thumbnailSource} className="w-100" />
            <div>
                <div className="mt-2 h6">{ title }</div>
                <div className="mt-1 text-muted">{ owner }</div>
                <div className="mb-4 text-muted">{ numberOfViews } viewers • { publishedDate }</div>
            </div>
        </div>
    )
}
