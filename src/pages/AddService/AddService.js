import { Form } from 'react-bootstrap';
import './AddService.css';

const AddService = () => {
  return (
    <div className='new-service outlet-page'>
      <h2>Add New Service</h2>
      <form className='update-profile'>
      <Form.Group className="mb-3">
          <Form.Control type="text" id="nameInput" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Control type="url" id="urlInput" placeholder="Photo Url" />
      </Form.Group>
      <Form.Select id="selectInput" className="mb-3">
         <option value="5">5 ★</option>
         <option value="4">4 ★</option>
         <option value="3">3 ★</option>
         <option value="2">2 ★</option>
         <option value="1">1 ★</option>
      </Form.Select>
      <Form.Group className="mb-3">
          <Form.Control type="number" id="numberInput" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" id="textareaInput" rows={3} placeholder="Description" />
      </Form.Group>
      <button type="submit" className='kitchen-btn'>Add Service</button>
    </form>
    </div>
  )
}

export default AddService