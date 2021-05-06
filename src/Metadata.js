import React from 'react';

export const Metadata = (props) => {
    const {
        date,
        publisher,
        tags,
        commentNumber
    } = props;

    const tagsComponents = tags.map((tag) => {
        return <a href="#" key={tag}>{tag},</a>
    } ) 

    return (
        <ul className="entry-meta clearfix">
            <li><i className="icon-calendar3"></i> {date}</li>
            <li><a href="#"><i className="icon-user"></i> {publisher}</a></li>
            <li><i className="icon-folder-open"></i> {tagsComponents}</li>
            <li><a href="#"><i className="icon-comments"></i> {commentNumber}</a></li>
        </ul>
    )
}