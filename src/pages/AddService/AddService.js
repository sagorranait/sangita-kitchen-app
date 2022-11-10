import { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import './AddService.css';

const AddService = () => {
  usePageTitle('Add New Service');
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState(false);

  const addServiceHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const thum_image = form.thum_image.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;
    setAdding(true);
    const newService = {title, thum_image, rating, price, description};

    fetch('http://localhost:5000/addService', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify(newService)
      })
    .then(res => res.json())
    .then(data => {
      setAdding(false);
      setMessage(true);
      if(data.acknowledged){
          toast.success('Service Added Successfully.');
          form.reset();
      }
    })
    .catch(error => console.error(error));

  }

  return (
    <div className='new-service outlet-page'>
      <h2>Add New Service</h2>
      <form className='add-service update-profile' onSubmit={addServiceHandler}>
      <Form.Group className="mb-3">
          <Form.Control type="text" id="nameInput" name='title' placeholder="Title" />
      </Form.Group>
      <Form.Group>
          <Form.Control type="url" id="urlInput" name='thum_image' placeholder="Photo Url" />
      </Form.Group>
      <select id="selectInput" name='rating'>
         <option value="5">5 ★</option>
         <option value="4">4 ★</option>
         <option value="3">3 ★</option>
         <option value="2">2 ★</option>
         <option value="1">1 ★</option>
      </select>
      <Form.Group className="mb-3">
          <Form.Control type="number" id="numberInput" name='price' placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" id="textareaInput" rows={3} name='description' placeholder="Description" />
      </Form.Group>
      <button type="submit" className='kitchen-btn'>{adding ? 'Adding...' : 'Add Service'}</button>
    </form>
      {message && 
        <Alert key='success' variant='success' className='mt-3'>
          Visit the services page to see the new Service. <Link to="/services">Click Me</Link>
        </Alert>
      }
    </div>
  )
}

export default AddService