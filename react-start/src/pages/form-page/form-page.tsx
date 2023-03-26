import React from 'react';
import Form from '../../components/form/form';
import './form-page.css';

class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="wrapperForm">
        <Form />
      </div>
    );
  }
}
export default FormPage;
