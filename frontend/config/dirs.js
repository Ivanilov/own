const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.resolve(ROOT, 'src');
const DIST = path.resolve(ROOT, 'dist');

module.exports = {
  ROOT,
  SRC,
  DIST
};
