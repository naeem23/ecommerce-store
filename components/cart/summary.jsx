'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

import { formatter } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

export const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Payment completed.');
            removeAll();
        }

        if (searchParams.get('canceled')) {
            toast.error('Something went wrong.');
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
            {
                productIds: items.map((item) => item.id),
            }
        );

        window.location = response.data.url;
    };

    return (
        <div className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-semibold text-gray-900">
                Order Summary
            </h2>
            <div className="mt-2 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-300 pt-3">
                    <p className="text-base font-medium text-gray-900">
                        Order total
                    </p>
                    <p className="font-semibold text-gray-900">
                        {formatter.format(totalPrice)}
                    </p>
                </div>
                <Button
                    onClick={onCheckout}
                    disabled={items.length === 0}
                    className="w-full rounded-full mt-6"
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
};
