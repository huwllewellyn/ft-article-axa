const basePath = import.meta.env.BASE_URL;

/**
 * Resolve asset path with proper base path handling
 * Works in both dev (/) and production (/ft-article-axa/)
 */
export function getAssetPath(path) {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
}
