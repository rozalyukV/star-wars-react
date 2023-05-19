import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routesConfig from '@routes/routesConfig'
import { REPO_NAME } from '@constants/repo'
import Header from '@components/Header'

import styles from './App.module.css'

const App = () => {
  return (
    <Router basename={`/${REPO_NAME}`}>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
