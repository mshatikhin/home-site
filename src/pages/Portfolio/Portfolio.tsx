import React from 'react';
import styles from './Portfolio.module.css';
import { Loader } from '../../components/Loader';
import fetch from 'cross-fetch';
import { Photoset, PhotosetsResponse } from './types';
import { RequestStatus } from '../../util.types';

interface State {
  albums: Photoset[];
  requestStatus: RequestStatus;
}

const Portfolio: React.FC = () => {
  const [state, setState] = React.useState<State>({
    albums: [],
    requestStatus: RequestStatus.Default
  });

  React.useEffect(() => {
    if (state.requestStatus !== RequestStatus.Default) {
      return;
    }
    setState({ albums: [], requestStatus: RequestStatus.IsFetching });
    fetch('/api/albums')
      .then(response => response.json())
      .then((response: PhotosetsResponse) => {
        if (response.stat === 'ok')
          setState({
            albums: response.photosets.photoset,
            requestStatus: RequestStatus.IsLoaded
          });
      })
      .catch(e => {
        setState({
          albums: [],
          requestStatus: RequestStatus.IsFailed
        });
      });
  });

  console.log(state);
  return null;
  // return (
  //   <div className={styles.main}>
  //     {state.requestStatus === RequestStatus.IsFetching ? (
  //       <Loader />
  //     ) : (
  //       state.albums.map(album => {
  //         const additionalClass =
  //           album.primary_photo_extras.width_z -
  //             album.primary_photo_extras.height_z >
  //           0
  //             ? styles.horizontalImage
  //             : styles.verticalImage;
  //         return (
  //           <div key={album.id} className={styles.card}>
  //             <div className={styles.meta}>
  //               <header className={styles.header}>
  //                 {album.title._content}
  //               </header>
  //               <span className={styles.countPhotos}>
  //                 {album.photos} photos
  //               </span>
  //             </div>
  //             <img
  //               className={styles.mainImage + ' ' + additionalClass}
  //               src={album.primary_photo_extras.url_z}
  //               width={album.primary_photo_extras.width_z}
  //               height={album.primary_photo_extras.height_z}
  //             />
  //           </div>
  //         );
  //       })
  //     )}
  //   </div>
  // );
};

export default Portfolio;
