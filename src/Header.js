import React from 'react';
// class = className
// onclick = onClick
// styles="border: 1px; border-radius: 1px;" = style={{ border: "1px", borderRadius: "1px"}}

export const Header = () => {
    return (
        <header id="header" className="full-header sticky-header">
    
            <div id="header-wrap">
    
                <div className="container clearfix">
    
                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
    
                    <div id="logo">
                        <a href="#" className="standard-logo">Simple page</a>
                    </div>
    
                    <nav id="primary-menu">
    
                        <ul>
                            <li><a href="#">
                                <div>Home</div>
                            </a>
                            </li>
                            <li><a href="#">
                                <div>Blog</div>
                            </a>
                            </li>
                            <li><a href="#">
                                <div>About</div>
                            </a>
                            </li>
                        </ul>
    
                    </nav>
    
                </div>
    
            </div>
        </header>
    )
}