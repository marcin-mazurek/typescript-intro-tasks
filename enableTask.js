const fs = require('fs');

const taskNumber = process.argv[2];

if (isNaN(+taskNumber)) {
  console.log('Incorrect task number provided!');
  process.exit(1);
}

try {
  fs.appendFileSync('./mocha.opts', `task-${taskNumber}/**/*.test.ts\n`);
} catch (err) {
  console.log('Failed to write changes to mocha.opts!');
  process.exit(1);
}

let typeScriptConfig;

try {
  const fileContent = String(fs.readFileSync('./tsconfig.json'));
  typeScriptConfig = JSON.parse(fileContent);
} catch (err) {
  console.log('Failed to read tsconfig.json!');
  process.exit(1);
}

try {
  typeScriptConfig.include.push(`./task-${taskNumber}/**/*.ts`);
} catch (err) {
  console.log('Failed to modify tsconfig.json!');
  process.exit(1);
}

try {
  fs.writeFileSync('./tsconfig.json', JSON.stringify(typeScriptConfig, null, 2));
} catch (err) {
  console.log('Failed to write changes to tsconfig.json!');
  process.exit(1);
}

console.log(`Task ${taskNumber} has been enabled!`);