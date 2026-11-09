import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function Dashboard() {
  return (
    <section className="container py-5">
      <h1 className="display-5 fw-semibold">Welcome to OctoFit Tracker</h1>
      <p className="lead text-secondary">
        Track activities, join a team, and reach your fitness goals.
      </p>
    </section>
  )
}

function Activities() {
  return (
    <section className="container py-5">
      <h1 className="h2">Activities</h1>
      <p className="text-secondary">Your activity dashboard is ready to build.</p>
    </section>
  )
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand fw-semibold" to="/">
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Dashboard
            </NavLink>
            <NavLink className="nav-link" to="/activities">
              Activities
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  )
}

export default App
