import React from 'react';
import Vabi from '../Vabi/Vabi';
import Vatija from '../Vatija/Vatija';

const Uncle = ({house}) => {
    return (
        <div>
            <h1>Uncle is here</h1>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Vatija></Vatija>
                <Vabi></Vabi>
            </section>
        </div>
    );
};

export default Uncle;