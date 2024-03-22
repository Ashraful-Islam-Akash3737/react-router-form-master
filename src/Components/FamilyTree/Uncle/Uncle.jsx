// import React from 'react';

import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="dad">
                <section className="childDad">
                    <Cousin name={'akash'}></Cousin>
                </section>
                <section className="childDad">
                    <Cousin name='Mim'></Cousin>
                </section>
            </section>
        </div>
    );
};

export default Uncle;