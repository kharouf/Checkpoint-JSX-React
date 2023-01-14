
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <>
      <header className="App-header">
       <h1 className='profile'>My Profile</h1>
       <ProfilePhoto />
       <FullName />
       <Address />
      </header>
    </>
  );
}

export default App;
