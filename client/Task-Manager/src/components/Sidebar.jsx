import { FaTasks, FaTrashAlt, FaUsers } from 'react-icons/fa';
import { MdDashboard, MdTaskAlt, MdOutlinePendingActions, MdOutlineAddTask, MdSettings } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setOpenSidebar } from '../redux/slices/authSlice';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
    
    const user = useSelector((state)=>state.auth);

    const dispatch = useDispatch();
    const location = useLocation();

    //getting the current path, splitting, then getting the path name
    const path = location.pathname.split("/")[1];
    // path =  path[0];

    //get all linkdata if isAdmin or else get 1st 5.
    const sidebarLinks = user?.isAdmin? linkData :linkData.slice(0,5);

    const collapseSidbar = ()=>{
        dispatch(setOpenSidebar(false));
    };

    const NavLink = ({el}) =>{

        return <Link to={el.link} onClick={collapseSidbar} 
        className={clsx('w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:text-[#256edd]',path == el.link.split('/')[0]? "bg-blue-700  hover:text-white" : "")}>

            {el.icon}
            <span className='hover:text=[#256edd]'> {el.label}</span>
        </Link>

    };

    return (
    <div className='w-full h-full flex flex-col gap-6 p-5'>
        <h1 className='flex gap-1 items-center'>
            <p className='bg-blue-600 p-2 rounded-full'>
            < MdOutlineAddTask className='text-white text-2xl font-black'/>
            </p>
            <span className='text-2xl font-bold text-black'> TaskFlow</span>
        </h1>

        <h1 className='flex-1 flex flex-col gap-y-5 py-8'>
            {
                sidebarLinks.map((link)=>
                {
                   return <NavLink el={link} key={link.label} />
                })
            }
        </h1>

        <div>
          <button className='w-full flex gap-2 p-2 items-center text-lg text-gray-800 '>
          <MdSettings />  
          <span>Settings</span>
          </button>
        </div>
        
    </div>
  )
}

export default Sidebar;
