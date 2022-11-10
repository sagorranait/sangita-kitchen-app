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
                     description="In contrast to NoSQL databases, which can also be document-based, key-value pair-based, or graph-based, SQL databases are table-based. While NoSQL databases scale horizontally, SQL databases scale vertically. While NoSQL databases employ a dynamic schema for unstructured data, SQL databases have a preset schema. When comparing the performance of SQL vs NoSQL, SQL requires specialist database hardware whereas NoSQL uses standard hardware."
                  />
                  <Question
                    eventKey="2" 
                    title="What is JWT, and how does it work?"
                    description="<b>JWT : </b> A claim or set of claims that may be transmitted between two parties is represented by a JSON Web Token (JWT). The token's creator has digitally signed the claim, and the person that receives the token can later use this digital signature to demonstrate that they are the rightful owner of the claim. <br/><br/>JWTs can be broken down into three parts: header, payload, and signature. Each part is separated from the other by dot (.), and will follow the below structure: <b>Header.Payload.Signature</b>. The information contained in the header describes the algorithm used to generate the signature. All the claims within JWT authentication are stored in this part. Claims are used to provide authentication to the party receiving the token. For example, a server can set a claim saying ‘isAdmin: true’ and issue it to an administrative user upon successfully logging into the application. The admin user can now send this token in every consequent request he/she sends to the server to prove their identity. The signature part of a JWT is derived from the header and payload fields."
                  />
                  <Question
                    eventKey="3" 
                    title="What is the difference between javascript and NodeJS?"
                    description="Differences are: <br/><br/><ol><li>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</li><li>JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</li><li>JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.</li><li>JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.</li><li>JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</li><li>JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</li></ol>"
                  />
                  <Question 
                    eventKey="1" 
                    title="How does NodeJS handle multiple requests at the same time?"
                    description="As part of its service, Nodejs manages numerous client requests and queues them in EventQueue. This is demonstrated by the event-driven architecture used in the NodeJS framework. Requests are received and handled via an event loop in NodeJS. <br/></br>In-process requests or in-flight requests are used to describe several requests that are submitted simultaneously. This is what is referred to as cooperative multitasking in theory. Some operations in Node.js require their own threads to be run. In this situation, native threads are used for asynchronous file I/O. Node.js' internal use of threads has no impact on how Javascript is executed. More than one thread at once is not supported by the Javascript interpreter.Due to the fact that the state might change in the middle of an async operation, race conditions can alter. If it first copies all of the data before starting to write it to a disk, it could be possible to avoid this. However, while having a lot of data, this server does not have as much RAM as one might anticipate. As a result, the approach is to set a flag and then clear it just before the data is due to be written to disk."
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