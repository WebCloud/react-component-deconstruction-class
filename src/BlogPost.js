import React from 'react';

export const BlogPost = (props) => {
    const {
        image,
        title,
        content,
        metadataComponent,
    } = props;

    return (
        <div className="entry clearfix">
            <div className="entry-image">
                <img className="image_fade" src={image} alt="Standard Post with Image" />
            </div>
            <div className="entry-c">
                <div className="entry-title">
                    <h2><a href="#">{title}</a></h2>
                </div>
                
                {metadataComponent}

                <div className="entry-content">
                    <p>{content}</p>
                    <a href="#" className="more-link">Read More</a>
                </div>
            </div>
        </div>

    )
}