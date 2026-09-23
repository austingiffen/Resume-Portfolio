/**
 * Utility function to resolve asset URLs (images, PDFs, videos) correctly
 * across both local development (localhost) and GitHub Pages subpath hosting.
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  // Strip leading slash if present to make path relative
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure relative path starting with './' for GitHub Pages subpath compatibility
  return `./${cleanPath}`;
};
