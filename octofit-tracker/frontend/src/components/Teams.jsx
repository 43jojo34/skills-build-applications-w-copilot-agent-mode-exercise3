import ApiResource from './ApiResource.jsx'

const columns = [
  { field: 'name', label: 'Team' },
  { field: 'description', label: 'Description' },
  { field: 'members', label: 'Members' },
]

export default function Teams() {
  return <ApiResource title="Teams" resource="teams" columns={columns} />
}
