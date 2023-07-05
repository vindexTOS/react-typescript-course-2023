import SideNavigation from './components/SideNavigation'
import UseStatePrimitiveFinal from './training-field/1-use-state/final/1-use-state-primitive'
import UseStatePrimitiveStarter from './training-field/1-use-state/starter/1-use-state-primitive'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <main>
      <SideNavigation />
      <Routes>
        <Route path="use-state-final" element={<UseStatePrimitiveFinal />} />
        <Route path="use-state-start" element={<UseStatePrimitiveStarter />} />
      </Routes>
    </main>
  )
}

export default App
