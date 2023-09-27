'use client';

import Image from 'next/image';
import { Expand, ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { formatter } from '@/lib/utils';

export const ProductCard = ({ data }) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* image and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    fill
                    src={data.images?.[0]?.url}
                    alt={data.name}
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex justify-center items-center gap-x-6">
                        <Button
                            onClick={() => {}}
                            size="icon"
                            variant="secondary"
                            className="rounded-full border bg-white shadow-md p-2 hover:scale-110 transition"
                        >
                            <Expand size={20} className="text-gray-600" />
                        </Button>
                        <Button
                            onClick={() => {}}
                            size="icon"
                            variant="secondary"
                            className="rounded-full border bg-white shadow-md p-2 hover:scale-110 transition"
                        >
                            <ShoppingCart size={20} className="text-gray-600" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* decription */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>

            {/* price & review */}
            <div className="flex items-center justify-between">
                <p className="font-semibold">{formatter.format(data.price)}</p>
            </div>
        </div>
    );
};
