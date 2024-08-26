// Endpoint for querying the fibonacci numbers
// Import the Express objects Request and Response to ensure proper typing.
import { Request, Response } from 'express';
import fibonacci from "./fib";

// Define req and res as beng of types Request and Response.
export default (req: Request, res: Response) => {
  const { num }: {num: string} = req.params as {num: string};

  // The parseInt function converts a string to an integer.
  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  // Convert the -1 returned by the fibonacci string to a message.
  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
