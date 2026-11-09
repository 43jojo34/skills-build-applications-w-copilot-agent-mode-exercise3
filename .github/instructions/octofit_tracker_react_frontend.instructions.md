---
applyTo: "octofit-tracker/frontend/**"
---
# Octofit Tracker React 프레젠테이션 계층 지침

디렉터리를 변경하지 않고 `octofit-tracker/frontend`를 대상으로 하는 명령을 사용하세요.

```bash
npm create vite@latest octofit-tracker/frontend -- --template react
npm install --prefix octofit-tracker/frontend
npm install bootstrap react-router-dom --prefix octofit-tracker/frontend
```

`octofit-tracker/frontend/src/main.jsx` 맨 위에 Bootstrap CSS import를 추가하세요.

## 이미지

앱 로고로 `docs/octofitapp-small.png`를 사용하세요.
