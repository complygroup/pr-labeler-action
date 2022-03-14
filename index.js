const distPath = './dist/index.js';
const errorMessage = `ERROR: since pr-labeler-action v3, binding to the master version is no longer supported. Please update .github/workflows/pr-labeler.yml to bind to a major version.

You can do so by changing:
- uses: complygroup/pr-labeler-action@master

To:
- uses: complygroup/pr-labeler-action@v3

Please check the repository (https://github.com/complygroup/pr-labeler-action) for the latest version.
`;

try {
  require(distPath);
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    // Re-throw not "Module not found" errors
    throw error;
  }
  if (error.message.indexOf(distPath) === -1) {
    // Re-throw not found errors for other modules
    throw error;
  }

  console.error(errorMessage);
  throw error;
}
