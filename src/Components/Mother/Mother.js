import React from 'react';
import GrandMother from '../GrandMother/GrandMother';
import Mama from '../Mama/Mama';

const Mother = ({house}) => {
    return (
        <div>
            <h1>Mother is My Heaven</h1>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <GrandMother></GrandMother>
                <Mama></Mama>
            </section>
        </div>
    );
};

export default Mother;