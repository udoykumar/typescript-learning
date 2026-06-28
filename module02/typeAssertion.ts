// let anything: any;
// anything = 'udoy';
// (anything as string)

const kgToGmConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `converted output is: ${Number(value) * 1000}`;
  }
};

const result = kgToGmConverter(23) as number;
const result1 = kgToGmConverter("2 kg");

console.log({ result, result1 });
