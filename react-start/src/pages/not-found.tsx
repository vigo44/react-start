import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <div>404 Page not found</div>
        <div>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}
export default NotFound;
