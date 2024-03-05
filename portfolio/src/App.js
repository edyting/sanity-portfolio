import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import LayOut from './component/LayOut';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Singlepost from './pages/Singlepost';
import Project from './component/Project';
import Post from './pages/Post';


const router= createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    errorElement:<Error/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/post",element:<Post/>},
      {path:"/post/:slug",element:<Singlepost/>},
      {path:"/project",element:<Project/>},
     

    ]
  }
])

function App() {
  return (
    <div className="App">
    
    <RouterProvider router={router}>
      
    </RouterProvider>

    </div>
  );
}

export default App;
