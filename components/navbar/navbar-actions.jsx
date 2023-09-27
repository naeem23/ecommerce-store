'use client';

import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button size="sm" className={cn('rounded-full px-5 py-3')}>
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">0</span>
            </Button>
        </div>
    );
};
