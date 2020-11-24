
import React from 'react';
import SettingsProvider from './setteing';
import ToDo from './todo-connected';


function App() {
  return (
    <>
     <SettingsProvider>
    <ToDo />
    </SettingsProvider>
    
  </>
  );
}

export default App;
