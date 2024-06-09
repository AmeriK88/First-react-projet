import { useState } from "react"

const Content = () => {

  const [name, setName] = useState('José');

  const handleNameChange = () => {
    const names = [ 'Jose', 'Juan', 'Kevin'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
    console.log('You cliked it')
}

  return (
    <main>
        <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Cambiar nombre</button>
        <button onClick={handleClick}>Click It</button>
    </main>
  )
}

export default Content