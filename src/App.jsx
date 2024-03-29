import { BrowserRouter, Routes, Route, Link,NavLink   } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';


const App = () => {
  return(
    <BrowserRouter>
      <div className='container'>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
            <span className='fs-4'>My app</span>
          </Link>

          <ul className='nav nav-pills'>
            <li className='nav-item'>
             <NavLink to="/" className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="posts" className='nav-link'>Posts</NavLink>
            </li>
            <li className='nav-item'>
             <NavLink to="profile" className='nav-link'>Profile</NavLink>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path='posts' element={<Posts/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='/' element={<Home/>}/>
           <Route path="*" element={
            <>
                <h1>No page found</h1>
            </>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;