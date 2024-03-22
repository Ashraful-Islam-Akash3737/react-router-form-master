import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
const Grandpa = () => {
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="child">
                    <div className="child">
                        <Dad></Dad>
                    </div>
                    <div className="child">
                        <Uncle></Uncle>
                    </div>
                    <div className="child">
                        <Aunty></Aunty>
                    </div>


                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. create a context and export it.
 * 2. add provider for a context with a value
 * 3. useContext to access value in the API
 */