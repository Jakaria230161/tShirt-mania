import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';
import Wife from '../Wife/Wife';
import './Grandpa.css';

const Grandpa = () => {

    const house = 12;

    return (
        <div className='grandpa'>
            <h1>This is Grandpa here</h1>
            <section className='flex'>
                <Father house={house}></Father>
                <Mother house={house}></Mother>
                <Wife house={house}></Wife>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;