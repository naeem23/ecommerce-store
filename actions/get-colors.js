const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async () => {
    const res = await fetch(url, { next: { revalidate: 0 } });
    return res.json();
};

export default getColors;
