import React from 'react';

export const PageTitle = () => {
    return (
        <section id="page-title">

            <div className="container clearfix">
                <h1>Blog</h1>
                <span>Our Latest News</span>
                <ol className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">Blog</li>
                </ol>
            </div>

        </section>
    );
}