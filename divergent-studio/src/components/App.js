import React from 'react';
import './App.scss';
import OurProcess from './OurProcess';
import Banner from './Banner';
import OurProjects from './OurProjects';


function App() {
  return (
    <div className="App">


      <Banner />
      <OurProcess />
    <OurProjects />;

    </div>
  );
}

export default App;
