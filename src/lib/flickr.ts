const FLICKR_USER_ID = "199472815@N07";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY || "";
const BASE_URL = "https://api.flickr.com/services/rest";

export interface FlickrPhoto {
  id: string;
  title: string;
  secret: string;
  server: string;
  farm: number;
  url_b?: string;
  url_l?: string;
  url_m?: string;
}

export interface FlickrAlbum {
  id: string;
  title: { _content: string };
  description: { _content: string };
  photos: number;
  primary: string;
  secret: string;
  server: string;
  farm: number;
}

export function getPhotoUrl(
  photo: { server: string; id: string; secret: string },
  size: "b" | "l" | "m" | "z" = "b"
): string {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
}

export async function getAlbums(): Promise<FlickrAlbum[]> {
  if (!FLICKR_API_KEY) {
    console.warn("FLICKR_API_KEY not set — returning empty albums");
    return [];
  }

  const url = `${BASE_URL}/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${encodeURIComponent(FLICKR_USER_ID)}&format=json&nojsoncallback=1&per_page=50`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data?.photosets?.photoset ?? [];
}

export async function getAlbumPhotos(
  albumId: string,
  perPage = 24
): Promise<FlickrPhoto[]> {
  if (!FLICKR_API_KEY) return [];

  const url = `${BASE_URL}/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&user_id=${encodeURIComponent(FLICKR_USER_ID)}&photoset_id=${albumId}&format=json&nojsoncallback=1&per_page=${perPage}&extras=url_b,url_l,url_m`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data?.photoset?.photo ?? [];
}

export async function getRecentPhotos(count = 12): Promise<FlickrPhoto[]> {
  if (!FLICKR_API_KEY) return [];

  const url = `${BASE_URL}/?method=flickr.people.getPublicPhotos&api_key=${FLICKR_API_KEY}&user_id=${encodeURIComponent(FLICKR_USER_ID)}&format=json&nojsoncallback=1&per_page=${count}&extras=url_b,url_l,url_m`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data?.photos?.photo ?? [];
}
