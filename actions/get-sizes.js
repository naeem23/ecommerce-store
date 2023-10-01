const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () => {
    const res = await fetch(url, { next: { revalidate: 0 } });
    return res.json();
};

export default getSizes;
