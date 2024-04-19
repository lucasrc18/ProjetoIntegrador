import { useEffect, useState } from "react";

export function useElementSwitcher(...elements: JSX.Element[]){
    const [index, setIndex] = useState<number>(0);
    const [element, setElement] = useState<JSX.Element>(elements[0]);

    function switchElement(){
        if(index + 1 >= elements.length)
            setIndex(0);
        else
            setIndex(index+1);
    }

    function switchToPreviousElement(){
        if(index - 1 < 0)
            setIndex(elements.length - 1);
        else
            setIndex(index - 1)
    }

    function setElementUsingIndex(i: number){
        if(i >= 0 && i < elements.length)
            setIndex(i)
        else
            throw new Error("Index out of bounds");
    }

    useEffect(() => {
        setElement(elements[index]);
    }, [index]);

    return {
        element,
        switchElement,
        switchToPreviousElement,
        index,
        setElement: setElementUsingIndex
    };
}