## 5단계: 다중 계층 애플리케이션의 React 프레젠테이션 계층 빌드하기

> [!NOTE]
> 이 단계에서는 최신 다중 계층 애플리케이션의 **프레젠테이션 계층**을 구현합니다.

이 단계에서는 다음을 수행합니다.

- React 19 프런트엔드 컴포넌트를 완성합니다.
- 각 보기를 백엔드 API 라우트에 연결합니다.
- 탐색에 React Router를 사용합니다.

### :keyboard: 활동: 프런트엔드 컴포넌트 및 라우팅 구현

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=512a97&color=ecd8ff)
>
> ```prompt
> 이 다중 계층 애플리케이션의 React 19 프레젠테이션 계층을 업데이트해 주세요.
>
> - src/App.jsx와 src/main.jsx 업데이트
> - src/components/Activities.jsx 업데이트
> - src/components/Leaderboard.jsx 업데이트
> - src/components/Teams.jsx 업데이트
> - src/components/Users.jsx 업데이트
> - src/components/Workouts.jsx 업데이트
> - 탐색에 react-router-dom 사용
> - `import.meta.env`를 통해 Vite 환경 변수 사용(예: `import.meta.env.VITE_CODESPACE_NAME`)
> - `VITE_CODESPACE_NAME`을 정의해야 한다고 문서화(예: `.env.local`)
> - 다음 경로 아래의 API 엔드포인트 사용:
>   https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
> - `VITE_CODESPACE_NAME`이 설정되지 않은 경우 `https://undefined-8000...` URL을 방지하는 안전한 대체 동작 추가
> - 페이지가 매겨진 응답 및 배열 응답과의 호환성 유지
> ```

### :keyboard: 활동: 프레젠테이션 계층 실행 및 확인

Vite 개발 서버로 React 앱을 실행하고(예: `npm run dev`) 포트 `5173`을 엽니다.

1. 변경 사항을 커밋하고 푸시합니다.

1. Mona가 확인하고 마지막 학습 내용을 게시할 때까지 기다립니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

다음 파일에 예상한 엔드포인트 경로가 포함되어 있는지 확인하세요.

- `Activities.jsx` -> `/api/activities/`
- `Leaderboard.jsx` -> `/api/leaderboard/`
- `Teams.jsx` -> `/api/teams/`
- `Users.jsx` -> `/api/users/`
- `Workouts.jsx` -> `/api/workouts/`

</details>
