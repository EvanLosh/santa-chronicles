import './App.css';
import Header from './Header';

function App() {


  // Fetch the database here, put it in a state, and pass it down to Home and History as props

  return (
    <div className="App">
      <Header />
      {/* The Home, About, NewPostForm, and History components get rendered by the router in index.js */}

    </div>
  );
}

export default App;
