import React from 'react';
import Navbar from '../src/navbar/Navbar'
import FormField from '../src/formfield/FormField'
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
   <Navbar />
   <FormField labelName="Name" type="text" holder="e.g Alex Smith" />
<FormField labelName="Email" type="email" holder="e.g. alexsmith@gmail.com" />
</div>
  );
};

export default App;
