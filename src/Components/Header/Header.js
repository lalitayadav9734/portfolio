import React from 'react';
import '../Header/Header.css';

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#seo-experience'>SEO Expertise</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );

};
export default Header;
