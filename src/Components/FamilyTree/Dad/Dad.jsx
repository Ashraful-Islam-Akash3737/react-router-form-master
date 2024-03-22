// import React from 'react';

import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
// import '../Grandpa/Grandpa.css'

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="dad">
                <div className="childDad">
                    <MySelf></MySelf>
                </div>
                <div className="childDad">
                    <Brother></Brother>
                </div>
                <div className="childDad">
                    <Sister></Sister>
                </div>
            </section>
        </div>
    );
};

export default Dad;