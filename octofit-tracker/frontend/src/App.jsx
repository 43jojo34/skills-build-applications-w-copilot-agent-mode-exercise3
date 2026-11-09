import { NavLink, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function Dashboard() {
  return (
    <section className="container py-5">
      <div className="d-flex flex-column flex-md-row align-items-md-center gap-4">
        <img className="dashboard-logo" src={logo} alt="OctoFit Tracker" />
        <div>
          <h1 className="display-5 fw-semibold">Welcome to OctoFit Tracker</h1>
          <p className="lead text-secondary mb-0">
            Track activities, join a team, and reach your fitness goals.
          </p>
        </div>
      </div>
    </section>
  )
}

const navigation = [
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Users' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand fw-semibold" to="/" end>
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav flex-row flex-wrap">
            <NavLink className="nav-link" to="/" end>
              Dashboard
            </NavLink>
            {navigation.map(({ to, label }) => (
              <NavLink className="nav-link" to={to} key={to}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  )
}

export default App
