// import React from 'react';

import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Gift: {gift}</p>
        </div>
    );
};

export default Special;