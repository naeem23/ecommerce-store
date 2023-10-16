'use client';

import { useEffect, useState } from 'react';

import { PreviewModal } from '@/components/product/preview-modal';

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <PreviewModal />
        </>
    );
};

export default ModelProvider;
