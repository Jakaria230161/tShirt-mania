import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';
import Wife from '../Wife/Wife';
import './Grandpa.css';

const RingContext = createContext('Golden Ring');

const Grandpa = () => {

    const [house, setHouse] = useState(1);
    const ring = "diamond ring";

    return (
        <RingContext.Provider value={[house,setHouse]}>
            <div className='grandpa'>
            <h1>This is Grandpa here</h1>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Mother house={house}></Mother>
                <Wife house={house}></Wife>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;