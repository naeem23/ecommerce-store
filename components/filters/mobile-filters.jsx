'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Filter } from '@/components/filters/filter';
import { Modal } from '@/components/ui/modal';

export const MobileFilters = ({ sizes, colors }) => {
    const [open, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Button className="lg:hidden rounded-full" onClick={onOpen}>
                Filters
                <Plus size={20} className="ml-2" />
            </Button>

            <Modal open={open} onClose={onClose} title="Filters">
                <div className="pt-4">
                    <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                    <Filter valueKey="colorId" name="Colors" data={colors} />
                </div>
            </Modal>
        </>
    );
};
