import { Trash2 } from 'lucide-react';
import Image from 'next/image';

import { formatter } from '@/lib/utils';
import useCart from '@/hooks/use-cart';

export const CartItem = ({ data }) => {
    const cart = useCart();

    const removeCartItem = () => {
        cart.removeItem(data.id);
    };

    return (
        <li className="flex items-start py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden">
                <Image
                    fill
                    src={data.images[0].url}
                    alt="product image"
                    className="object-cover object-center"
                />
            </div>
            <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-black">
                        {data.name}
                    </p>
                    <div
                        className="rounded-full p-2 flex items-center justify-center bg-white border shadow-md cursor-pointer hover:scale-110 transition"
                        onClick={removeCartItem}
                    >
                        <Trash2 size={15} />
                    </div>
                </div>

                <div className="mt-1 flex items-center text-sm">
                    <p className="mr-4 pr-4 border-r border-gray-200 text-gray-500">
                        {data.size.value}
                    </p>
                    <div
                        className="h-4 w-4 rounded-full border border-gray-600"
                        style={{ backgroundColor: data.color.value }}
                    />
                </div>

                <p className="mt-1 text-lg font-semibold text-gray-900">
                    {formatter.format(data.price)}
                </p>
            </div>
        </li>
    );
};
