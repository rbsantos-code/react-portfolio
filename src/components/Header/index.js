import React from 'react';

function Header(props) {
    return (
        <header className="mb-auto">
            {props.children}
        </header>
    )
}

export default Header;