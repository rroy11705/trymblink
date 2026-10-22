/**
 * Utility functions to get URLs for static images served from /public
 */

/**
 * Get the full URL for an image
 * @param imagePath - The path to the image (e.g., '/images/logos/trymblink.webp')
 * @returns Root-relative URL for the image
 */
export function getImageUrl(imagePath: string): string {
  // Remove leading slash if present for consistent concatenation
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  
  return `/${cleanPath}`
}

/**
 * Get multiple image URLs at once
 * @param imagePaths - Array of image paths
 * @returns Array of full URLs
 */
export function getImageUrls(imagePaths: string[]): string[] {
  return imagePaths.map(path => getImageUrl(path))
}

/**
 * Get image URL for a specific folder structure
 * @param folder - The folder name (e.g., 'logos', 'backgrounds')
 * @param subfolder - Optional subfolder (e.g., 'trusted-by', 'services')
 * @param filename - The filename with extension
 * @returns Full URL for the image
 */
export function getImageUrlFromFolder(folder: string, filename: string, subfolder?: string): string {
  const basePath = subfolder 
    ? `images/${folder}/${subfolder}/${filename}`
    : `images/${folder}/${filename}`
  
  return getImageUrl(basePath)
}