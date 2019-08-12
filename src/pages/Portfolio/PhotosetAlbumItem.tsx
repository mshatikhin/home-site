import * as React from 'react';
import { Photoset, PhotosetAlbum, PhotosetResponse } from './types';
import styles from './Portfolio.module.css';
import { RequestStatus } from '../../util';
import { PhotosetItems } from './PhotosetItems';

interface State {
  photoset: Photoset | null;
  requestStatus: RequestStatus;
}

interface Props {
  album: PhotosetAlbum;
}

export const PhotosetAlbumItem: React.FC<Props> = ({ album }) => {
  const [state, setState] = React.useState<State>({
    photoset: null,
    requestStatus: RequestStatus.Default
  });

  const [photosetId, setPhotosetId] = React.useState<string>();

  React.useEffect(() => {
    if (!photosetId) {
      return;
    }

    setState({ photoset: null, requestStatus: RequestStatus.IsFetching });

    fetch(`/api/albums/${photosetId}`)
      .then(response => response.json())
      .then((response: PhotosetResponse) => {
        setState({
          photoset: response.photoset,
          requestStatus: RequestStatus.IsLoaded
        });
      })
      .catch(() => {
        setState({
          photoset: null,
          requestStatus: RequestStatus.IsFailed
        });
      });
  }, [photosetId]);

  const onLoadPhotoset = (id: string) => () => {
    debugger;
    setPhotosetId(id);
  };

  const additionalClass =
    album.primary_photo_extras.width_z - album.primary_photo_extras.height_z > 0
      ? styles.horizontalImage
      : styles.verticalImage;

  return (
    <div key={album.id} className={styles.card} onClick={onLoadPhotoset(album.id)} title="Смотреть серию">
      <div className={styles.meta}>
        <header className={styles.header}>{album.title._content}</header>
        <span className={styles.countPhotos}>{album.photos} photos</span>
      </div>
      <img
        className={`${styles.mainImage} ${additionalClass}`}
        src={album.primary_photo_extras.url_z}
        width={album.primary_photo_extras.width_z}
        height={album.primary_photo_extras.height_z}
        alt={album.title._content}
      />
      {state.photoset && (
        <>
          <PhotosetItems photos={state.photoset.photo} />
          <div style={{ textAlign: 'center' }}>
            <button className={styles.btnRequest}>Назад</button>
          </div>
        </>
      )}
    </div>
  );
};
