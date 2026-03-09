import clsx from 'clsx';
import { MdOutlineCreditScore } from "react-icons/md";
import { MdOutlineCreditCardOff } from "react-icons/md";


interface Props {
    isPaid: boolean;
}

export const OrderStatus = ({ isPaid }: Props) => {
    return (
        <div className={
            clsx(
                "flex flex-row items-center justify-center border rounded-full py-1 px-4 text-sm font-medium mb-2",
                {
                    'border-amber-700 bg-amber-50 text-amber-700': !isPaid,
                    'border-emerald-700 bg-green-50 text-lime-700': isPaid
                }
            )
        }>
            {isPaid ? <MdOutlineCreditScore size={30} /> : <MdOutlineCreditCardOff size={30} /> }
            <span className="mx-2">
                {
                    isPaid ? 'Orden ya fue pagada' : 'Pendiente de pago'
                }
            </span>
        </div>
    )
}