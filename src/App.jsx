import './App.css'
import Avatar from './components/Avatar'
import Card from './components/Card'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      
      <Avatar 
      src={'https://ell.h-cdn.co/assets/16/07/980x980/square-1455813161-elle-henrycavill.jpg'} 
      userName={'Henry Cavil'}
      />

      
      <Card 
      title="anri"
      content="ragbi" />
      <Card 
      title={'giorgi'}  
      content={'tele dade'} />
      
    </div>
  )
}

export default App
