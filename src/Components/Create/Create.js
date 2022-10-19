import React, { useState, Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date()
  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
          name, category, price, url, userId: user.uid, createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input 
              className="input" 
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)} 
              id="price" 
              name="price" />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <br />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">Upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
