import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase/firebase';
import Img from 'react-cool-img';
import Card from '../../components/shared/Card';

const ImageUpload = () => {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const imagesRef = storage.ref('images');
    imagesRef
      .listAll()
      .then(photos => {
        photos.items.forEach(photo => {
          displayImage(photo);
        });
      })
      .catch(error => console.log(error));
  }, [image]);

  const displayImage = imageRef => {
    imageRef
      .getDownloadURL()
      .then(url => {
        setFiles(files => [...files, url]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const style = {
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUrl(url);
          })
          .catch(error => console.log(error));
      }
    );
  };

  return (
    <>
      <div style={style}>
        <progress value={progress} max="100" />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        <Img
          src={url || 'https://via.placeholder.com/400x300'}
          alt="Uploaded Image"
          height="300"
          width="400"
        />
      </div>
      <hr />
      {files &&
        files.map(file => (
          <Card img={file} />
          // <Img
          //   src={file || 'https://via.placeholder.com/200x100'}
          //   height="100"
          //   width="100"
          // />
        ))}
    </>
  );
};

export default ImageUpload;
