'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Filter = ({ valueKey, name, data }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const handleClick = (id) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id,
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true }
        );

        router.push(url);
    };

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">{name}</h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleClick(filter.id)}
                        key={filter.id}
                        className={cn(
                            '',
                            selectedValue === filter.id && 'bg-black text-white'
                        )}
                    >
                        {filter.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};
