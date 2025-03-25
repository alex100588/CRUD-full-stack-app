import AddUser from './addUser/AddUser';
import './App.css';
import Update from './updateUser/Update';
import User from './user/User';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path: '/add',
      element: <AddUser />
    },
    {
      path: '/update/:id',
      element: <Update />
    },
  ])
  console.log(route);
  

  return (
    <div className="App">
      <h1 className='text-center mt-5'>Employee CRUD App</h1>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
