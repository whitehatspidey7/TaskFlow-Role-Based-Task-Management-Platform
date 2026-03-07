import { Toaster } from 'sonner'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import User from './pages/User'
import Task from './pages/Task'
import Trash from './pages/Trash'
import TaskDetails from './pages/TaskDetails'
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'


function Layout()
{
  const user = "";

  location  = useLocation();

  if(user)
  {
    <div className='w-full h-screen  flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
       {/* {<Sidebar/>} */}
      </div>
    
      {/* {<MobileSidebar />} */}
      
      <div className='flex-1 overflow-y-auto'>
      {/* {<Navbar/>} */}
      </div>

      <div className='p-4 2x1:px-10'>
        <Outlet/>
      </div>
    </div>
  }
  else{
    <Navigate to='Login' state={{from: location}} replace/>
  }
}

const App = () => {
  return (
    <div>
         <main className='w-full min-h-screen  bg-[#f3f4f6]'>
    
          <Routes>
              <Route element={<Layout />} >
                <Route path='/' element={<Navigate to='/dashboard' />} /> 
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/tasks' element={<Task />} />
                <Route path='/completed/:status' element={<Task />} />
                <Route path='/in-progress/:status' element={<Task />} />
                <Route path='/todos/:status' element={<Task />} />
                <Route path='/team' element={<User />} />
                <Route path='/trash' element={<Trash />} />
                <Route path='/task/:id' element={<TaskDetails />} />

              </Route>
              
              <Route path='/login' element={<Login />}/>

          </Routes>

          <Toaster richColors />
        
        </main>
    
    </div>
  )
}

export default App
