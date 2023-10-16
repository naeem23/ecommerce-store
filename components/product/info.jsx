'use client';

import { ShoppingCart } from 'lucide-react';

import { formatter } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

export const Info = ({ data }) => {
    const cart = useCart();

    const addToCart = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <p className="mt-3 text-2xl font-semibold text-gray-900">
                {formatter.format(data.price)}
            </p>
            <hr className="my-4" />

            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>{data?.size?.value}</div>
            </div>
            <div className="flex items-center gap-x-4 mt-3">
                <h3 className="font-semibold text-black">Color:</h3>
                <div
                    className="h-6 w-6 rounded-full border border-gray-600"
                    style={{ backgroundColor: data?.color?.value }}
                />
            </div>

            <div className="mt-10">
                <Button size="lg" className="rounded-full" onClick={addToCart}>
                    Add to Cart
                    <ShoppingCart className="ml-2" />
                </Button>
            </div>
        </div>
    );
};
