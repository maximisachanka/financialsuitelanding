// Temporary script to fix font classes
const fs = require('fs');

const appContent = fs.readFileSync('./App.tsx', 'utf8');

const fixed = appContent
  .replace(/font-\['Figtree:Bold',sans-serif\]/g, 'font-bold')
  .replace(/font-\['Figtree:Medium',sans-serif\]/g, 'font-medium')
  .replace(/font-\['Figtree:SemiBold',sans-serif\]/g, 'font-semibold');

fs.writeFileSync('./App.tsx', fixed, 'utf8');
console.log('Fixed font classes');
