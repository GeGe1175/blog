import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/portfolio/' exact />
        <Route component={About} path='/portfolio/about' />
        <Route component={SinglePost} path='/portfolio/post/:slug' />
        <Route component={Post} path='/portfolio/post' />
        <Route component={Project} path='/portfolio/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
