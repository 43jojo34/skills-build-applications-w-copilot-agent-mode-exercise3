export function getApiUrl(resource) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

  if (!codespaceName) {
    return null
  }

  return `https://${codespaceName}-8000.app.github.dev/api/${resource}/`
}
