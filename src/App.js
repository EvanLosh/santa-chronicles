import './App.css';
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import NewPostForm from './NewPostForm';
import History from './History';

function App() {


  // Fetch the database here, put it in a state, and pass it down to Home and History as props

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <NewPostForm />
      <History />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
