var inputs = process.argv.slice(2);
var result = inputs.map(a => a[0])
                    .reduce((a, b) => a + b);
					
console.log(`[${inputs}] becomes "${result}"`);