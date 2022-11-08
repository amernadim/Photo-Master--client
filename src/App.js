import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/Routes/Router/Router';


function App() {
  return (
    <div className="">
     
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
     
    </div>
  );
}

export default App;
