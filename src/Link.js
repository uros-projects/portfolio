import React from 'react';

const Link = ({ project }) => {
    const { id, name, url, description } = project;

    return (
        <section className='section'>
            <a href={`${url}`} target="_blank" rel="nofollow noopener noreferrer">
                <div className='blog-preview'>
                    <h2>{id} - {name}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </section>
    )
}

export default Link
