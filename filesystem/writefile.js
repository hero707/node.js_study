const fs = require('fs');
const content = 'hello world';

try {
  const data = fs.writeFileSync('write.txt', content);
} catch (err) {
  console.error(err);
}
