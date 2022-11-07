import { Link, useRouteError } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ErrorImg from '../../assets/errorImg.png';
import './ErrorPage.css'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
        <Container>
            <div class="content">
                <img src={ErrorImg} alt='Not-Found' />
                <p>An Unexpected Error Occurred.</p>
                <p>Error Message : <i>{error.statusText || error.message}</i></p>
                <Link to={'/'} className="kitchen-btn">Back to Home Page</Link>
            </div>
        </Container>
    </div>
  )
}

export default ErrorPage