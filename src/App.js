import React from 'react';
import Layout from './containers/Layout'
// import Cards from './components/cards/cards'
import Tasks from './containers/tasks/task'

function App() {
  return (
    <div className="App">
      <Layout>
        <Tasks/>
      </Layout>
    </div>
  );
}

export default App;
