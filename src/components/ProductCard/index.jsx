'use client';
import Link from 'next/link';

export default function Index(props) {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href="#">
            <img src={props.src}
                    alt="Product image" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{props.type}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{props.name}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Obtenir un devis</p>
                </div>
            </div>
        </Link>
    </div>
    )
}