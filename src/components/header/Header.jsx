import React from 'react';

function Header(props) {
    return (
        <div className='contenedor-nav'>
            <nav>
                <h1>{props.title}</h1>
                <div>
                    <a rel="noreferrer" target="_blank" href={props.intagram}>Instagram</a>
                    <a rel="noreferrer" target="_blank" href={props.git}>Git Hub</a>
                    <a rel="noreferrer" target="_blank" href={props.face}>Facebook</a>
                </div>


            </nav>
        </div>
    );
}

export default Header;