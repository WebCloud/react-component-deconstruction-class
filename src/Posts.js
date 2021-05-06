import React from 'react';
import { BlogPost } from './BlogPost';
import { Metadata } from './Metadata';

export const Posts = () => {
    const blogPostContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur
    in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut
    perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae
voluptatem libero at eveniet veritatis ab facere.`;

    return (
        <div className="postcontent nobottommargin clearfix">

            <div id="posts" className="small-thumbs">
                <BlogPost metadataComponent={<Metadata date="13th Feb 2014" publisher="Me" tags={["General", "Media"]} commentNumber="133" />} image="images/blog/small/17.jpg" title="My most amazing blog post" content={blogPostContent} />
                <BlogPost metadataComponent={<Metadata date="23th Feb 2014" publisher="Myself" tags={["Movie", "Media"]} commentNumber="33" />} image="images/blog/small/12.jpg" title="My other amazing post" content={blogPostContent} />
                <BlogPost metadataComponent={<Metadata date="24th Feb 2014" publisher="Iren" tags={["General", "Photo"]} commentNumber="233" />} image="images/blog/small/21.jpg" title="This one no one reads" content={blogPostContent} />

                <div className="entry clearfix">
                    <div className="entry-c">
                        <div className="entry-image">
                            <blockquote>
                                <p>"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot
        cinder a second seems like an hour. That's relativity."</p>
                                <footer>Albert Einstein</footer>
                            </blockquote>
                        </div>
                        <ul className="entry-meta clearfix">
                            <li><i className="icon-calendar3"></i> 3rd Mar 2014</li>
                            <li><a href="#"><i className="icon-user"></i> admin</a></li>
                            <li><i className="icon-folder-open"></i> <a href="#">Quotes</a>, <a href="#">People</a></li>
                            <li><a href="#"><i className="icon-comments"></i> 23</a></li>
                        </ul>
                    </div>
                </div>

                <div className="entry clearfix">
                    <div className="entry-c">
                        <div className="entry-image">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, fuga optio voluptatibus saepe
                                    tenetur aliquam debitis eos accusantium! Vitae, hic, atque aliquid repellendus accusantium
                                    laudantium minus eaque quibusdam ratione sapiente.
      </div>
                            </div>
                        </div>
                        <ul className="entry-meta clearfix">
                            <li><i className="icon-calendar3"></i> 21st Mar 2014</li>
                            <li><a href="#"><i className="icon-user"></i> admin</a></li>
                            <li><i className="icon-folder-open"></i> <a href="#">Status</a>, <a href="#">News</a></li>
                            <li><a href="#"><i className="icon-comments"></i> 11</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="pager nomargin">
                <li className="previous"><a href="#">&larr; Older</a></li>
                <li className="next"><a href="#">Newer &rarr;</a></li>
            </ul>

        </div>
    )
}