import ApiResource from './ApiResource.jsx'

const columns = [
  { field: 'displayName', label: 'Name' },
  { field: 'username', label: 'Username' },
  { field: 'email', label: 'Email' },
]

export default function Users() {
  return <ApiResource title="Users" resource="users" columns={columns} />
}
