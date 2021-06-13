import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        setAboutSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);


    return (
        <div>
            <h3 className="float-md-start mb-0" id="full-name" onClick={() => setAboutSelected(false)}>Richard Brian Santos</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#about" onClick={() => setAboutSelected(true)}>About Me</a>
                <a className={`nav-link ${contactSelected && 'navActive'}`} href="#contact">
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </a>
                {categories.map((category) => (
                    <a className={`nav-link ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name} href={category.name}>
                        <span onClick={() => {setCurrentCategory(category);
                        setContactSelected(false)}}>
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    )
}


export default Nav;