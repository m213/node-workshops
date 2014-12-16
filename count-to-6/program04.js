var numbers = process.argv.slice(2);
console.log(`The minimum of [${ numbers.reduce( (a, b) => `${a},${b}` ) }] is ${ Math.min(...numbers) }`);