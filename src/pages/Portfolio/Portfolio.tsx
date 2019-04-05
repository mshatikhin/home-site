import React from 'react';
import styles from './Portfolio.module.css';
import { Loader } from '../../components/Loader';
import fetch from 'cross-fetch';
import { Photoset, PhotosetAlbum, PhotosetResponse, PhotosetsResponse } from './types';
import { RequestStatus } from '../../util.types';
import { PhotosetAlbumItem } from './PhotosetAlbumItem';
import { PhotosetItem } from './PhotosetItem';
import ReactModal from 'react-modal';

interface State {
  photosets: PhotosetAlbum[];
  requestStatus: RequestStatus;
  requestStatusPhotoset: RequestStatus;
  photoset: Photoset | undefined;
  photosetId: string | undefined;
  showModal: boolean;
}

ReactModal!.defaultStyles.overlay!.backgroundColor = 'rgba(0,0,0,0.69)';
ReactModal!.defaultStyles.content!.backgroundColor = '#ddd';

const Portfolio: React.FC = () => {
  const [state, setState] = React.useState<State>({
    photosets: [],
    requestStatus: RequestStatus.Default,
    requestStatusPhotoset: RequestStatus.Default,
    showModal: false,
    photosetId: undefined,
    photoset: undefined
  });

  React.useEffect(() => {
    if (state.requestStatusPhotoset === RequestStatus.Default) {
      setState({
        ...state,
        photoset: undefined,
        photosetId: undefined,
        requestStatusPhotoset: RequestStatus.IsFetching
      });

      fetch(`/api/albums/${state.photosetId}`)
        .then(response => response.json())
        .then((response: PhotosetResponse) => {
          if (response.stat === 'ok')
            setState({
              ...state,
              photoset: response.photoset,
              requestStatusPhotoset: RequestStatus.IsLoaded
            });
        })
        .catch(() => {
          setState({
            ...state,
            requestStatusPhotoset: RequestStatus.IsFailed
          });
        });
    }

    if (state.requestStatus === RequestStatus.Default) {
      setState({ ...state, photosets: [], requestStatus: RequestStatus.IsFetching });

      fetch('/api/albums')
        .then(response => response.json())
        .then((response: PhotosetsResponse) => {
          if (response.stat === 'ok')
            setState({
              ...state,
              photosets: response.photosets.photoset,
              requestStatus: RequestStatus.IsLoaded
            });
        })
        .catch(() => {
          setState({
            ...state,
            photosets: [],
            requestStatus: RequestStatus.IsFailed
          });
        });
    }
  });

  const loadPhotoset = (photosetId: string) => () => {
    setState({
      ...state,
      requestStatusPhotoset: RequestStatus.Default,
      photosetId,
      showModal: true,
      photoset: undefined
    });
  };

  const handleCloseModal = () => {
    setState({
      ...state,
      photosetId: undefined,
      photoset: undefined,
      showModal: false
    });
  };

  return (
    <div className={styles.main}>
      {state.requestStatus === RequestStatus.IsFetching ? (
        <Loader />
      ) : (
        state.photosets.map(photoset => (
          <PhotosetAlbumItem key={photoset.id} photoset={photoset} onLoadPhotoset={loadPhotoset} />
        ))
      )}
      <ReactModal
        isOpen={state.showModal!}
        shouldFocusAfterRender={true}
        bodyOpenClassName="ReactModal__Body--open"
        onRequestClose={handleCloseModal}
      >
        {state.photoset == null ? (
          <Loader />
        ) : (
          <>
            <PhotosetItem photos={state.photoset.photo} />
            <div style={{ textAlign: 'center' }}>
              <button className={styles.btnRequest} onClick={handleCloseModal}>
                Закрыть
              </button>
            </div>
          </>
        )}
      </ReactModal>
    </div>
  );
};

export default Portfolio;
