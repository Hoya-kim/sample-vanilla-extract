import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.css';
import Logo from './components/Logo';
import CounterCard from './components/CounterCard';

function App() {
  return (
    <>
      <div>
        <Logo url='https://vite.dev' className='logo' imgSrc={viteLogo} imgAlt='Vite logo' />
        <Logo
          url='https://react.dev'
          className='logo react'
          imgSrc={reactLogo}
          imgAlt='React logo'
        />
      </div>
      <h1>Vite + React</h1>
      <CounterCard />
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
