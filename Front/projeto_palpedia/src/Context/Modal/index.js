import React, { useEffect, useState } from "react";

export const ModalContext = React.createContext();
ModalContext.displayName = 'Modal';

export const ModalProvider = ({ children }) => {
    var [show, setShow] = useState(false);

    async function handleShow(){
        setTimeout(() => {
            setShow(false)
        }, 5000)
    }

    useEffect(() => {
        handleShow()
    }, [show])

    return(
        <ModalContext.Provider
            value={{
                show,
                setShow
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}