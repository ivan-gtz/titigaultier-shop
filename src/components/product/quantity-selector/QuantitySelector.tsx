'use client'
import { parFont } from "@/config/fonts";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
    className?: string;
    size?: number;

    onQuantityChanged: ( value: number ) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged, className, size = 30 }: Props) => {

    // const [count, setCount] = useState( quantity );

    const onValueChange = ( value: number ) => {
        if ( (quantity + value) < 1 ) return;
        onQuantityChanged( quantity + value );
    }


    return (
        <div className={`flex text-base ${className}`}>
            <button onClick={ () => onValueChange( -1 )}>
                <IoRemoveCircleOutline size={ size }/>
            </button>
            <span className={`${ parFont.className } w-12  mx-3 px-5 bg-gray-100 flex items-center justify-center rounded-md`}>
                { quantity }
            </span>
            <button onClick={ () => onValueChange( +1 )}>
                <IoAddCircleOutline size={ size }/>
            </button>
        </div>
    )
}