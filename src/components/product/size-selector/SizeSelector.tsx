import { parFont } from "@/config/fonts";
import { Size } from "@/interfaces"
import clsx from "clsx";


interface Props {
    selectedSize?: Size;
    availableSizes: Size[];

    onSizeChange: ( size: Size ) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChange }: Props) => {


    return (
        <div className="my-5">
            <h3 className={`${ parFont.className } text-lg mb-4 font-semibold text-slate-900`}>Tallas disponibles</h3>
            <div className="flex-initial flex text-sm">
                {
                    availableSizes.map(size => (
                        <button
                            key={ size }
                            onClick={ () => onSizeChange(size) }
                            className={
                                clsx(
                                    `${ parFont.className } text-base mr-1 rounded-xl text-slate-700 h-10 w-10 hover:border transition-all font-medium`,
                                    {
                                        'bg-black text-white border font-semibold': size === selectedSize
                                    }
                                )
                            }
                        >
                            { size }
                        </button>
                        // <label key={ size }>
                        //     <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                        //     <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        //         { size }
                        //     </div>
                        // </label>
                    ))
                }
            </div>

        </div>
    )
}