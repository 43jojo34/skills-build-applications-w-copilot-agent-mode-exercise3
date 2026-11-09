import ApiResource from './ApiResource.jsx'

const columns = [
  { field: 'type', label: 'Activity' },
  { field: 'user', label: 'User' },
  { field: 'durationMinutes', label: 'Duration (min)' },
  { field: 'distanceKm', label: 'Distance (km)' },
  { field: 'performedAt', label: 'Date' },
]

export default function Activities() {
  return <ApiResource title="Activities" resource="activities" columns={columns} />
}
