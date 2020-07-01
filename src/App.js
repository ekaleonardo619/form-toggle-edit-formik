import React, { useState } from 'react';
import FormikForm from './FormikForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [fields, updateFields] = useState(
    {
      name: 'Admin',
      email: 'admin@example.com',
      mobile_no: '012345678'
    }
  );

  return (
    <div className="container">
      <FormikForm fields={fields} updateFields={updateFields}/>
    </div>
  );
}

export default App;
