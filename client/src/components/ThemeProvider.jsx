import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-gray-50 text-darkgray dark:text-sprinklergreenyellow dark:bg-darkblue min-h-screen'>
        {children}
      </div>
    </div>
  );
}
