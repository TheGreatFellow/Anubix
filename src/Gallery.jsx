import React from 'react'
import { imageData } from './data'
import './Gallery.scss'
import GalleryItem from './GalleryItem'
const Gallery = () => {
    const images = imageData.map((tupples, index) =>
        tupples.map((url, elementIndex) => (
            <GalleryItem
                key={url}
                index={elementIndex}
                src={url}
                columnOffset={index * 14}
            />
        ))
    )
    return (
        <div className='content'>
            <div className='gallery'>{images}</div>
        </div>
    )
}

export default Gallery
