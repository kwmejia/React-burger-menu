import { useState } from 'react';
import './styles.scss'

function App() {
  const [active, setActive] = useState(false);

  const handleClickBurger = () => {
    setActive(!active);
  }
  return (
    <div
      className="icon-cont"
      onClick={handleClickBurger}
    >
      <span className={active ? 'active' : ''}></span>
      <span className={active ? 'active' : ''}></span>
      <span className={active ? 'active' : ''}></span>
    </div>
  );
}

export default App;
