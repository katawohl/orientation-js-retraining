import React from 'react';
import { Switch, Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h1>Page Not Found</h1>
        <div className='back-home-link'>
            <Link to='/'>Back to home</Link>
        </div>
    </div>
);

export default PageNotFound