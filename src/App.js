import './assets/style/main.scss'
import DetailHome from './components/DetailHome/DetailHome'
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'
import HomeTwo from './components/DetailHome/HomeTwo'
import HomeThree from './components/DetailHome/HomeThree'
import Planirovka from './components/DetailHome/Planirovka'

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<DetailHome />} />
                <Route path='/home' element={<HomeTwo />} />
                <Route path='/home-two' element={<HomeThree />} />
                <Route path='/home-12' element={<Planirovka />} />
            </Routes>
            {/* <Cart /> */}
        </div>
    )
}

export default App
