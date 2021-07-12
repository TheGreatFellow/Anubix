import React from 'react'
import { points } from './data'
import './GalleryItem.scss'
const GalleryItem = ({ src, index, columnOffset }) => {
    const values = points[index]
    if (!values) return null
    const [row, spanRow, column, spanColumn] = values
    const getScrollIndex = () => {
        // if (index === 0) return 0
        // if (index === 2) return -0.3
        // if (index === 4) return -0.5
        if (
            index === 6 ||
            index === 5 ||
            index === 1 ||
            index === 7 ||
            index === 8
        )
            return 2
        return 0
    }

    return (
        <div
            className='gallery-item'
            data-scroll
            data-scroll-speed={getScrollIndex()}
            style={{
                gridArea: `${row}  / ${column} / span ${spanRow} / span ${spanColumn}`,
            }}
        >
            <div className='gallery-item-image'>
                <div
                    className=' gallery-item-imginner'
                    style={{
                        backgroundImage: `url(${src})`,
                        // height: `${spanRow * '2vh'} `,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default GalleryItem
