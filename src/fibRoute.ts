// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const { num }: {num: string} = (req as Request).params as {num: string};

  // The parseInt function converts a string to an integer.
  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
