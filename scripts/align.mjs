import fs from 'fs';
import path from 'path';

function alignFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Encuentra bloques de 2 o más asignaciones consecutivas
  const blockRegex = /((?:^[ \t]*(?:const|let|var)[ \t]+[a-zA-Z0-9_$]+[ \t]*=[^\n]*\n){2,})/gm;

  content = content.replace(blockRegex, (match) => {
    const lines = match.trimEnd().split('\n');
    let maxLeft = 0;
    const parsedLines = lines.map((line) => {
      const m = line.match(/^([ \t]*(?:const|let|var)[ \t]+[a-zA-Z0-9_$]+)[ \t]*=[ \t]*(.*)$/);
      if (m) {
        maxLeft = Math.max(maxLeft, m[1].length);
        return { left: m[1], right: m[2] };
      }
      return { raw: line };
    });

    return (
      parsedLines
        .map((p) => {
          if (p.raw !== undefined) return p.raw;
          const padding = ' '.repeat(maxLeft - p.left.length + 1);
          return `${p.left}${padding}= ${p.right}`;
        })
        .join('\n') + '\n'
    );
  });

  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.js')) {
      alignFile(fullPath);
    }
  }
}

walkDir('./src');
console.log('✅ Variables alineadas automáticamente.');
