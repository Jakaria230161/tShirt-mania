import React from 'react';
import Cousin from '../Cousin/Cousin';
import CousinSis from '../CousinSis/CousinSis';
import Myself from '../Myself/Myself';

const Father = ({house}) => {
    return (
        <div>
            <h1>Father is here, what do you want?</h1>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Cousin house={house}></Cousin>
                <CousinSis house={house}></CousinSis>
            </section>
        </div>
    );
};

export default Father;