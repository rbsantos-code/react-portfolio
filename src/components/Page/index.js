import React from 'react';
import Content from '../Content';
import Contact from '../Contact';
import Hero from '../Hero'
import Project from '../Project';
import Resume from  '../Resume';


function Page({ currentCategory }) {
    console.log(currentCategory);

    const renderContent = () => {

        switch (currentCategory) {
            case 'contact':
                return <Contact />;
            case 'projects':
                return <Project />;
            case 'resume':
                return <Resume />;
            default:
                return <Hero />;
        }
    };
    console.log(renderContent)

    return (
        <section>
            <Content>
                {renderContent()}
            </Content>
        </section>
    )
}

export default Page;