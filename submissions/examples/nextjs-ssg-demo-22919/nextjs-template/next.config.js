// submissions/nextjs-ssg-demo-22919/nextjs-template/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the magic flag! It forces Next.js to pre-render the entire application 
  // into static HTML/CSS/JS files inside the 'out' directory during `npm run build`.
  // It completely removes the need for a Node.js server!
  output: 'export',
};

module.exports = nextConfig;
