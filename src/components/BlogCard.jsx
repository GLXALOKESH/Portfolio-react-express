import React from 'react'
import './BlogCard.css'

const BlogCard = (prop) => {
  return (
    <>
        <div className="comp-blogcard-base">
            <div className="comp-blogcard-title">{prop.title}</div>
            <div className="comp-blogcard-desc">{prop.description}</div>
            <div className="comp-blogcard-showmore">
                <div className="comp-blogcard-showmore-title">Show More</div>
                <div className="comp-blogcard-showmore-icon"><img src="arrow_drop_down.svg" alt="icon" /></div>
            </div>
        </div>
    </>
  )
}

export default BlogCard
