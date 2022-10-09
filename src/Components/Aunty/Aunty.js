import React from 'react';
import JamaiBaba from '../JamaiBaba/JamaiBaba';
import Nati from '../Nati/Nati';

const Aunty = ({house}) => {
    return (
        <div>
            <h1>Aunty</h1>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <JamaiBaba></JamaiBaba>
                <Nati></Nati>
            </section>
        </div>
    );
};

export default Aunty;