import ApiResource from './ApiResource.jsx'

const columns = [
  { field: 'user', label: 'User' },
  { field: 'period', label: 'Period' },
  { field: 'points', label: 'Points' },
]

export default function Leaderboard() {
  return <ApiResource title="Leaderboard" resource="leaderboard" columns={columns} />
}
