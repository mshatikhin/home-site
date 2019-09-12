export interface PhotosetsResponse {
  photosets: Photosets;
  stat: "ok";
}

export interface Photo {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  isprimary: string;
  ispublic: number;
  secret: string;
  server: string;
  title: string;
}

export interface Photoset {
  id: string;
  owner: string;
  ownername: string;
  page: number;
  pages: number;
  per_page: number;
  perpage: number;
  photo: Photo[];
  primary: string;
  title: string;
  total: number;
}

export interface PhotosetResponse {
  photoset: Photoset;
  stat: "ok";
}

export interface Photosets {
  page: number;
  pages: number;
  perpage: number;
  photoset: PhotosetAlbum[];
  total: number;
}

export interface PhotosetAlbum {
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
