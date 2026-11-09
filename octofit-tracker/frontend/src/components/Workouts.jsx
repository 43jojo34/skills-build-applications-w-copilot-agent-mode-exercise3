import ApiResource from './ApiResource.jsx'

const columns = [
  { field: 'title', label: 'Workout' },
  { field: 'category', label: 'Category' },
  { field: 'description', label: 'Description' },
  { field: 'durationMinutes', label: 'Duration (min)' },
  { field: 'difficulty', label: 'Difficulty' },
]

export default function Workouts() {
  return <ApiResource title="Workouts" resource="workouts" columns={columns} />
}
