---
mode: 'agent'
model: GPT-5.5
description: 'Octofit 다중 계층 애플리케이션의 Node.js 로직 계층 만들기'
---

Octofit Tracker 다중 계층 애플리케이션을 위해 `octofit-tracker/backend`에 로직 계층을 만드세요.

요구 사항:

1. 디렉터리를 변경하지 말고 경로가 명시된 명령을 사용하세요.
2. Express를 사용하여 TypeScript Node.js API를 초기화하세요.
3. build/dev/start 스크립트를 구성하세요.
4. 다음 라우트 처리기를 추가하세요.
   - `/api/users/`
   - `/api/teams/`
   - `/api/activities/`
   - `/api/leaderboard/`
   - `/api/workouts/`
5. 서버 포트를 `8000`으로 유지하세요.
6. `CODESPACE_NAME`을 사용하여 Codespaces를 인식하는 API URL 지원을 추가하세요.
