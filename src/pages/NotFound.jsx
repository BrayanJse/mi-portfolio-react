import React, { useEffect } from 'react';

const NotFound = () => {

  useEffect(() => {
    document.title = 'Not Found'
  }, [])
  
  return (
    <div className='page-error page-error__404'>
      <div className="page-error__container conta">
        <div className="page-error__header">
          <p>image error</p>
        </div>
        <div className="page-error__content">
          <h1>Not found in My Portfolio</h1>
          <p>This is the homepage.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
