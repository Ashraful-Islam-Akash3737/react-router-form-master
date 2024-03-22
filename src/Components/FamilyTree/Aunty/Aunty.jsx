// import React from 'react';

import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="dad">
                <section className="childDad">
                    <Cousin name={'aka'}></Cousin>
                </section>
                <section className="childDad">
                    <Cousin name='doka'></Cousin>
                </section>
            </section>
        </div>
    );
};

export default Aunty;