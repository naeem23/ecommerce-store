import { getBillboard, getProducts } from '@/actions';
import { Billboard } from '@/components/billboard';
import Container from '@/components/container';
import { ProductList } from '@/components/product/product-list';

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('65069cab54b5f2561c1709f1');

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList
                        title="Featured Products"
                        products={products}
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
