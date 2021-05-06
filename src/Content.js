import React from 'react';
import { Posts } from './Posts';

export const Content = () => {
    return (
        <section id="content">

            <div className="content-wrap">

                <div className="container clearfix">
                    < Posts />
                    
                    <div className="sidebar nobottommargin col_last clearfix">
                        <div className="sidebar-widgets-wrap">

                            <div className="widget clearfix">

                                <h4>Tag Cloud</h4>
                                <div className="tagcloud">
                                    <a href="#">general</a>
                                    <a href="#">videos</a>
                                    <a href="#">music</a>
                                    <a href="#">media</a>
                                    <a href="#">photography</a>
                                    <a href="#">parallax</a>
                                    <a href="#">ecommerce</a>
                                    <a href="#">terms</a>
                                    <a href="#">coupons</a>
                                    <a href="#">modern</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}