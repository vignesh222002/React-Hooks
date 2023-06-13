import React from "react";
import ComponentB from "./ComponentB";

export let UserContext = React.createContext()
export let ChannelContext = React.createContext()

export default function ComponentA() {
    return (
        <>
           <UserContext.Provider value = "Vignesh">
                <ChannelContext.Provider value= "perumal">
                    <ComponentB />
                </ChannelContext.Provider>
           </UserContext.Provider>
        </>
    )
}