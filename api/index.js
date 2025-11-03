import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve built React app
app.use(express.static(join(__dirname, '../Shopr/build')));

// Optionally serve legacy static assets if needed
// app.use('/static', express.static(join(__dirname, '../static')));

// Catch-all handler for React Router
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../Shopr/build/index.html'));
});

// For local development - start server if run directly
const isRunningDirectly = import.meta.url === `file://${process.argv[1]}` || 
                          process.argv[1]?.includes('api/index.js');

if (isRunningDirectly) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}`);
    console.log(`📦 Serving React app from: ${join(__dirname, '../Shopr/build')}\n`);
  });
}

export default app; // For Vercel serverless function

