import fetch from "cross-fetch";
import { Request, Response } from "express";

const FLICKR_USER_ID = "124274905@N03";
const FLICKR_API_KEY = "205ce46245f3c208bb2faae036f8738b";

export class FlickrClient {
  private static flickrUrl({ method, params }: { method: string; params: string }) {
    return `https://api.flickr.com/services/rest/?method=${method}&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&${params}&format=json&nojsoncallback=1`;
  }

  static async getAlbums(req: Request, res: Response) {
    try {
      const url = FlickrClient.flickrUrl({ method: "flickr.photosets.getList", params: "&primary_photo_extras=url_z" });
      const response = await fetch(url);
      const resp = await response.json();
      if (resp.stat !== "ok") {
        throw Error("Ошибка при попытке загрузить альбомы");
      }

      res.status(200).send(resp);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  }

  static async getPhotoset(req: Request, res: Response) {
    try {
      const url = FlickrClient.flickrUrl({
        method: "flickr.photosets.getPhotos",
        params: `&photoset_id=${req.params.photosetId}`,
      });
      const response = await fetch(url);
      const resp = await response.json();
      if (resp.stat !== "ok") {
        throw Error("Ошибка при попытке загрузить фотосет");
      }

      res.status(200).send(resp);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  }
}
