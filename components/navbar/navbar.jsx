import Link from 'next/link';

import Container from '@/components/container';
import { MainNav } from '@/components/navbar/main-nav';
import { NavbarActions } from '@/components/navbar/navbar-actions';
import { getCategories } from '@/actions';

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 lg:ml-0 flex gap-x-2">
                        <p className="font-bold text-xl">Store</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
