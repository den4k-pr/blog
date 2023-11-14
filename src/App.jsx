import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Privacy } from './pages/Privacy';
import { Layout } from './components/layout';
import "./styles/Layout.scss"
import "./styles/About.scss"
import "./styles/Home.scss"
import "./styles/Project.scss"
import { About } from './pages/About';
import { EmailJS } from './pages/Emailjs';

function App() {
  return (
      <Router>
        <Layout>
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/emailjs" element={<EmailJS/>} />
          </Routes >
        </Layout>
      </Router>
  );
}

export default App;
