import { Accordion, Container } from 'react-bootstrap';
import Brands from '../../components/Brands/Brands';
import Instagram from '../../components/Instagram/Instagram';
import Question from '../../components/Question/Question';
import usePageTitle from '../../hooks/usePageTitle';
import './Blog.css';

const Blog = () => {
  usePageTitle('Blog');
  return (
    <>
      <section id='questions'>
         <Container>
            <h3>Blog Questions</h3>
            <div className='question'>
               <Accordion defaultActiveKey="0">
                  <Question
                     eventKey="0" 
                     title="Difference between SQL and NoSQL."
                     description="Cross-source Resource Sharing (CORS) is an HTTP header-based mechanism that allows a server to indicate any origin (domain, scheme, or port) other than the origin from which the browser should allow download resources. CORS also relies on a mechanism by which the browser makes a preemptive request to the server hosting the cross-origin resource, to verify that the server will allow the actual request. In this preamble, the browser sends headers indicating the HTTP method and the headers to be used in the actual request. Cross-origin request example: UI JavaScript from https: //domain-a.com uses XMLHttpRequest to make requests for https://domain-b.com/data.json."
                  />
                  <Question
                    eventKey="2" 
                    title="What is JWT, and how does it work?"
                    description="Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home, etc. In a word, the private route component is similar to the public route, the only changes are the redirect URL and the authentication condition. If the user is not authenticated, he will be redirected to the login page and the user will only be able to access authenticated routes if he is authenticated (logged in)."
                  />
                  <Question
                    eventKey="3" 
                    title="What is the difference between javascript and NodeJS?"
                    description="Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br/> <br/><b>Node.js works:</b> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request."
                  />
                  <Question 
                    eventKey="1" 
                    title="How does NodeJS handle multiple requests at the same time?"
                    description="Because, The Firebase Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, real-time events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.<br/><br/>You can use implement authentication like: <li>Email/Password</li><li>Phone Number</li><li>Google</li><li>Facebook</li><li>Twitter</li><li>Github</li><li>And many more.</li>"
                  />
               </Accordion>
            </div>
         </Container>
      </section>
      <Instagram/>
      <Brands/>
    </>
  )
}

export default Blog