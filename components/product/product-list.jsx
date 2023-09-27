import { NoResults } from '@/components/no-results';
import { ProductCard } from '@/components/product/product-card';

export const ProductList = ({ title, products }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {products.length === 0 && <NoResults />}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};
