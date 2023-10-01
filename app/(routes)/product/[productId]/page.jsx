import { getProducts, getProduct } from '@/actions';

import Container from '@/components/container';
import { Gallary } from '@/components/product/gallary';
import { Info } from '@/components/product/info';
import { ProductList } from '@/components/product/product-list';

const ProductPage = async ({ params }) => {
    const product = await getProduct(params.productId);
    const suggestedProduct = await getProducts({
        categoryId: product?.category?.id,
    });

    if (!product) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 sm:px-6 lg:px-8 py-10">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        <Gallary images={product.images} />

                        {/* info */}
                        <div className="mt-10 sm:mt-16 lg:mt-0 px-4 sm:px-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList
                        title="Related Items"
                        products={suggestedProduct}
                    />
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
