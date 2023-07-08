import SideNavigation from './components/SideNavigation'
import UseStatePrimitiveStarter from './training-field/1-use-state/starter/1-use-state-primitive'
import UseStatePrimitiveFinal from './training-field/1-use-state/final/1-use-state-primitive'
import TaskManagerStarter from './training-field/2-task-manager/starter/TaskManagerStarter'
import TaskManagerFinal from './training-field/2-task-manager/final/TaskManagerFinal'
import Usereducerstarter from './training-field/3-user-reducer/starter/1-use-reducer-starter'
import Usereducerfinal from './training-field/3-user-reducer/final/1-use-reducer-final'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <main>
      <SideNavigation />
      <Routes>
        <Route path="use-state-final" element={<UseStatePrimitiveFinal />} />
        <Route path="use-state-start" element={<UseStatePrimitiveStarter />} />
        <Route path="task-manager-starter" element={<TaskManagerStarter />} />
        <Route path="task-manager-final" element={<TaskManagerFinal />} />
        <Route path="use-reducer-final" element={<Usereducerfinal />} />
        <Route path="use-reducer-starter" element={<Usereducerstarter />} />
      </Routes>
    </main>
  )
}

export default App
