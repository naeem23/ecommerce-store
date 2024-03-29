'use client';

import usePreviewModal from '@/hooks/use-preview-modal';
import { Modal } from '@/components/ui/modal';
import { Gallary } from '@/components/product/gallary';
import { Info } from '@/components/product/info';

export const PreviewModal = () => {
    const previewModal = usePreviewModal();
    const product = usePreviewModal((state) => state.data);

    if (!product) {
        return null;
    }

    return (
        <Modal
            open={previewModal.isOpen}
            onClose={previewModal.onClose}
            title="Product Preview"
            size="lg"
        >
            <div className="grid grid-cols-1 sm:grid-cols-12 w-full items-start gap-x-6 lg:gap-x-8 gap-y-8 ">
                <div className="sm:col-span-5">
                    <Gallary images={product.images} />
                </div>
                <div className="sm:col-span-7">
                    <Info data={product} />
                </div>
            </div>
        </Modal>
    );
};
