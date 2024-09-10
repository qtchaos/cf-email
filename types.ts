// Number range types implemented from https://catchts.com/range-numbers

type ComputeRange<
    N extends number,
    Result extends Array<unknown> = []
> = Result["length"] extends N
    ? Result
    : ComputeRange<N, [...Result, Result["length"]]>;

export type KeyRange = ComputeRange<256>[number];

const ComputeRange = (N: number, Result: number[] = []): number[] => {
    if (Result.length === N) {
        return Result;
    }
    return ComputeRange(N, [...Result, Result.length]);
};
