
import Animals from './components/Animals'
import ChangeLoading from './components/ChangeLoading'
import Count from './components/Count'
import Info from './components/Info'

const App = () => {
  return (
    <div className='container conteiner-fluid text-bg-dark'>
    
      <Count />
      <Info />
      <ChangeLoading />
      <Animals />
    </div>
  )
}

export default App