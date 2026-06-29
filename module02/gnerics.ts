// dynamically generalize : generic

type GenericArray<value> = Array<value>;

// const friends: string[] = ["mr.x", "mr.y", "mr.z"];

const friends: GenericArray<string> = ["mr.x", "mr.y", "mr.z"];

// const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 20];
const coordinates2: Coordinates<string, string> = ["20", "20"];
