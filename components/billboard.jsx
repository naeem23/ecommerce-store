export const Billboard = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div
                className="rounded-xl aspect-[1.9/1] sm:aspect-[2/1] md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
};
