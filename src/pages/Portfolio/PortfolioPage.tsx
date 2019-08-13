import React from 'react';
import styles from './Portfolio.module.css';
import { Loader } from '../../components/Loader';
import fetch from 'cross-fetch';
import { PhotosetAlbum, PhotosetsResponse } from './types';
import { RequestStatus } from '../../util';
import { PhotosetAlbumItem } from './PhotosetAlbumItem';

interface State {
  photosets: PhotosetAlbum[];
  requestStatus: RequestStatus;
}

export const PortfolioPage: React.FC = () => {
  const [state, setState] = React.useState<State>({
    photosets: [],
    requestStatus: RequestStatus.Default
  });

  React.useEffect(() => {
    setState({ photosets: [], requestStatus: RequestStatus.IsFetching });

    fetch('/api/albums')
      .then(response => response.json())
      .then((response: PhotosetsResponse) => {
        setState({
          photosets: response.photosets.photoset,
          requestStatus: RequestStatus.IsLoaded
        });
      })
      .catch(() => {
        setState({
          photosets: [],
          requestStatus: RequestStatus.IsFailed
        });
      });
  }, []);

  return (
    <div className={styles.main}>
      {state.requestStatus === RequestStatus.IsFetching ? (
        <Loader />
      ) : (
        state.photosets.map(album => <PhotosetAlbumItem key={album.id} album={album} />)
      )}
    </div>
  );
};
