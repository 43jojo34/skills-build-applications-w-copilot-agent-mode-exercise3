## 2단계: 최신 다중 계층 애플리케이션 스택 초기화하기

> [!NOTE]
> **내부 동작:** 이 실습에서는 사용자 지정 지침 파일을 사용하여 Copilot이 다중 계층 애플리케이션을 설정하도록 안내합니다.

이 단계에서는 최신 **다중 계층 애플리케이션**의 기반을 초기화합니다.

- `octofit-tracker/frontend`와 `octofit-tracker/backend`를 만듭니다.
- Vite로 React 19(프레젠테이션 계층)를 초기화합니다.
- Node.js + Express + TypeScript 백엔드(로직 계층)를 초기화합니다.
- Mongoose를 사용한 MongoDB 지원(데이터 계층)을 추가합니다.

### :keyboard: 활동: 프런트엔드 및 백엔드 패키지 매니페스트 초기화

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=512a97&color=ecd8ff)
>
> ```prompt
> OctoFit Tracker 최신 다중 계층 애플리케이션을 초기화해 주세요.
>
> 다음 지침을 정확히 따르고 단계별로 실행해 주세요.
> - octofit-tracker/frontend와 octofit-tracker/backend 만들기
> - Vite를 사용하여 프런트엔드에서 React 19 초기화하기
> - Node.js + Express + TypeScript용 백엔드 package.json 초기화하기
> - MongoDB 데이터 액세스를 위해 mongoose 추가하기
> - 포트를 5173(프런트엔드), 8000(백엔드), 27017(MongoDB)로 유지하기
> ```

1. `build-octofit-app`에 커밋하고 푸시합니다.

1. Mona가 작업을 확인하고 다음 학습 내용을 게시할 때까지 기다립니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

다음 파일이 존재하고 예상한 종속성을 포함하는지 확인하세요.

- React 19가 포함된 `octofit-tracker/frontend/package.json`
- `express`와 `mongoose`가 포함된 `octofit-tracker/backend/package.json`

</details>
