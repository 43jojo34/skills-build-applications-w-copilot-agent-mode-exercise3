# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## OctoFit Tracker configuration

The frontend reads the Codespace name from Vite's `VITE_CODESPACE_NAME` environment variable to reach the API at `https://<codespace-name>-8000.app.github.dev/api/<resource>/`.

Create `octofit-tracker/frontend/.env.local` and set your Codespace name:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Restart the Vite development server after changing this file. If the variable is missing or blank, the app does not send an API request and displays a configuration message instead of constructing a URL containing `undefined`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
