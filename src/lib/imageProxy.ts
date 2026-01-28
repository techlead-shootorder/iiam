export function getProxiedImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) return '/news-placeholder.jpg';
  
  if (imageUrl.startsWith('http')) {
    return `/api/image?url=${encodeURIComponent(imageUrl)}`;
  }
  
  return `/api/image?url=${encodeURIComponent(imageUrl)}`;
}
