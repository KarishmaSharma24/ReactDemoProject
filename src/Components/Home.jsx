// import React from 'react';
import { useContext, useState } from 'react';
import hompageBanner from '../assets/images/banner.jpg';
import { Button, Image } from 'react-bootstrap';
import { BreadcromContext } from '../hooks/ContextAPI/Breadcrum';


function Home() {
  const [count, setCount] = useState(0);

  const pageName = useContext(BreadcromContext);
  
  
  return (
    <>
    
      <div>
        <div className='row'>
          <div className='col-sm-6'>
            <h1>This is Home Page {pageName}</h1>
          </div>
          <div className='col-sm-6 d-flex justify-content-end'>

            <h1>Count Click : {count}</h1>
            <Button variant="primary"  onClick={() => setCount(count + 1)}>Click Me</Button>
            
          </div>
        </div>
      </div>
      <div className='row'>
      <div className="text-center">
        <Image src={hompageBanner} fluid  className="w-100" />;
       

      </div>
      </div>
    </>
  );
}

export default Home;