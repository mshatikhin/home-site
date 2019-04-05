export interface PhotosetsResponse {
  photosets: Photosets;
  stat: 'ok';
}

export interface Photosets {
  page: number;
  pages: number;
  perpage: number;
  photoset: Photoset[];
  total: number;
}

export interface Photoset {
  id: string;
  title: {
    _content: string;
  };
  photos: number;
  primary_photo_extras: {
    url_z: string;
    width_z: number;
    height_z: number;
  };
}
