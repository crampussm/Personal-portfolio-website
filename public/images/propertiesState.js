import React from "react";
import { useState } from "react";
import PropertiesContext from "./propertiesContext";

const PropertiesState = (props)=>{
    const [region, setRegion] = useState('')
    return(
        <PropertiesContext.Provider value={{region, setRegion}}>
            {props.children}
        </PropertiesContext.Provider>
    )
}

export default PropertiesState;