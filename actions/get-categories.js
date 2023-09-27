const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
    const res = await fetch(url, { next: { revalidate: 0 } });
    return res.json();
};

export default getCategories;
