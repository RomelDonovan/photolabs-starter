import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  // Retrieve data and functions from the custom hook 'useApplicationData'
  const {
    state: { modalVisible, fav, photoData, topicData },
    updateToFavPhotoId,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onTopicSelect
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        setPhotoSelected={setPhotoSelected}
        fav={fav}
        updateToFavPhotoId={updateToFavPhotoId}
        onTopicSelect={onTopicSelect}
      />

      {modalVisible && (
        <PhotoDetailsModal
          modalVisible={modalVisible}
          setPhotoSelected={setPhotoSelected}
          photoData={photoData}
          updateToFavPhotoId={updateToFavPhotoId}
          fav={fav}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;