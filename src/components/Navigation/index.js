import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from 'react-router-dom';


function Nav(props) {
    const {
        // categories
        categories = [],
        setCurrentCategory,
        currentCategory,
        //about
        aboutSelected,
        setAboutSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);


    return (
        <div>
            <Link to="/">
                <h3 className="float-md-start mb-0" id="full-name" >Richard Brian Santos</h3>
            </Link>
            
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#about" onClick={() => setAboutSelected(true)}>
                    About Me
                </a>
                {categories.map((category) => (
                    <a className={`nav-link ${currentCategory.name === category.name && !aboutSelected && 'navActive'}`} key={category.name} href={category.name}>
                        <span onClick={(e) => {
                            e.preventDefault()
                            setCurrentCategory(category.name);
                        console.log(category);
                        setAboutSelected(false)}}>
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    )
}


export default Nav;