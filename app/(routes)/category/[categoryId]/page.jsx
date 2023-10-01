import { getCategory, getColors, getProducts, getSizes } from '@/actions';

import { Billboard } from '@/components/billboard';
import Container from '@/components/container';
import { Filter } from '@/components/filters/filter';
import { MobileFilters } from '@/components/filters/mobile-filters';
import { NoResults } from '@/components/no-results';
import { ProductCard } from '@/components/product/product-card';

const CategoryPage = async ({ params, searchParams }) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
        colorId: searchParams.colorId,
    });

    const category = await getCategory(params.categoryId);
    const sizes = await getSizes();
    const colors = await getColors();

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Filters */}
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>

                        {/* products */}
                        <div className="mt-6 lg:mt-0 lg:col-span-4">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <ProductCard
                                        data={product}
                                        key={product.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryPage;
