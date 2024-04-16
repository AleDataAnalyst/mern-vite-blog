import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap'
      >
        {/* Importar imagen de logo */}
        <img
          src="/images/logo/logocodesprinklerhorizontal.svg" // Imagen logo
          alt="CodeSprinkler"
          className="mr-2 inline-block w-60"
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Buscar...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='text-sprinklerblue w-10 h-10 p-2 lg:hidden' pill>
        <AiOutlineSearch color='sprinklerblue' />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          color='sprinklerblue'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun className='text-sprinklerblue' /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='usuario' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=perfil'}>
              <Dropdown.Item>Perfil</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Salir</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button className='navbarlink btn-primary text-berlin border border-2 border-solid border-sprinklerpink text-sprinklerpink hover:bg-sprinklerpink hover:text-sprinklergreenyellow focus:outline-none focus:ring focus:ring-sprinklerpink focus:ring-opacity-50'>
              Iniciar Sesión
            </Button>
          </Link>
        )}
        <Navbar.Toggle className='text-sprinklerblue hover:text-sprinklerpink dark:text-sprinklerblue dark:hover:text-sprinklerpink' />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/' className='text-sprinklerblue hover:text-sprinklerpink text-berlin text-semibold text-base'>Inicio</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/acerca'} as={'div'}>
          <Link to='/acerca' className='text-sprinklerblue hover:text-sprinklerpink text-berlin text-semibold text-base'>Acerca</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/proyectos'} as={'div'}>
          <Link to='/proyectos' className='text-sprinklerblue hover:text-sprinklerpink text-berlin text-semibold text-base'>Proyectos</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
