import React from 'react';
import Husband from '../Husband/Husband';
import MySon from '../MySon/MySon';

const Wife = ({house}) => {
    return (
        <div>
            <h1>Hey! My beautiful wife? I love you so much!!</h1>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Husband></Husband>
                <MySon></MySon>
            </section>
        </div>
    );
};

export default Wife;