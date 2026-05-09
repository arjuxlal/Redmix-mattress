const fs = require('fs');
const potrace = require('potrace');
const Jimp = require('jimp');

// Create directory if it doesn't exist
if (!fs.existsSync('src/components/ui')) {
  fs.mkdirSync('src/components/ui', { recursive: true });
}

Jimp.read('media/logomodel.jpeg').then(image => {
  // Enhancing the image for potrace tracing
  image.greyscale().contrast(1).posterize(2);
  image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
    if (err) throw err;
    potrace.trace(buffer, { color: 'currentColor', optTolerance: 0.2, threshold: 120, blackOnWhite: true }, (err, svg) => {
      if (err) throw err;
      // Convert to a React component
      const cleanSvg = svg.replace('<?xml version="1.0" standalone="no"?>', '').replace('<svg ', '<svg {...props} ');
      fs.writeFileSync('src/components/ui/Logo.tsx', `import React from 'react';\n\nexport default function Logo(props: React.SVGProps<SVGSVGElement>) {\n  return (\n    ${cleanSvg}\n  );\n}\n`);
      console.log('Logo generated successfully!');
    });
  });
}).catch(err => {
  console.error('Error tracing logo:', err);
});
