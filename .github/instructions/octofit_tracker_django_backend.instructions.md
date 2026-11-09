---
applyTo: "octofit-tracker/backend/**"
---
# Octofit Tracker 로직 및 데이터 계층 지침

## 로직 계층(Node.js + Express + TypeScript)

- `/api/` 아래에 API 라우트를 빌드하세요.
- API 서비스를 포트 `8000`에서 유지하세요.
- `CODESPACE_NAME`을 통해 환경을 인식하는 Codespaces URL을 사용하세요.

기본 URL 로직 예시:

```ts
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';
```

## 데이터 계층(MongoDB + Mongoose)

- 사용자, 팀, 활동, 리더보드, 운동에 Mongoose 모델을 사용하세요.
- `octofit_db`에 연결하세요.
- 라우트를 연결한 후 `curl`로 엔드포인트를 검증하세요.
