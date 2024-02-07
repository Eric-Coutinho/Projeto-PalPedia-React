import React, { useEffect, useState } from "react";

export const ModalContext = React.createContext();
ModalContext.displayName = 'Modal';

export const ModalProvider = ({ children }) => {
    var [show, setShow] = useState(false);
    var [pal, setPal] = useState("");

    async function handleShow(){
        if(show === true) {
            console.log(show);
        }
    }

    useEffect(() => {
        handleShow()
    }, [show])

    return(
        <ModalContext.Provider
            value={{
                show,
                setShow,
                pal,
                setPal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}