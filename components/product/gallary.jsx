'use client';

import Image from 'next/image';
import { Tab } from '@headlessui/react';

import { cn } from '@/lib/utils';

export const Gallary = ({ images = [] }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden sm:block w-full">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <Tab
                            key={image.id}
                            className="relative flex items-center justify-center aspect-square cursor-pointer rounded-md"
                        >
                            {({ selected }) => (
                                <div>
                                    <Image
                                        fill
                                        src={image.url}
                                        alt="product-image"
                                        className={cn(
                                            'object-cover object-center absolute inset-0 rounded-md ring-2 ring-offset-2',
                                            selected
                                                ? 'ring-black'
                                                : 'ring-transparent'
                                        )}
                                    />
                                </div>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels>
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="aspect-square relative rounded-lg">
                            <Image
                                fill
                                src={image.url}
                                alt="product image"
                                className="object-cover object-center rounded-lg"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};
