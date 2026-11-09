## 3단계: 다중 계층 애플리케이션의 로직 및 데이터 계층 빌드하기

> [!NOTE]
> **내부 동작:** 사용자 지정 지침과 프롬프트 파일은 Copilot이 로직 및 데이터 계층을 빌드하도록 안내합니다.

이 단계에서는 **다중 계층 애플리케이션**의 백엔드를 구현합니다.

- `octofit_db`에 대한 MongoDB 연결을 구성합니다.
- 사용자, 팀, 활동, 리더보드, 운동을 위한 Express 라우트를 만듭니다.
- 테스트 데이터를 채우는 시드 스크립트를 추가합니다.

### :keyboard: 활동: 로직 계층 스캐폴딩

다음 프롬프트 파일을 사용하세요.

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=512a97&color=ecd8ff)
>
> ```prompt
> /create-express-logic-tier
> ```

### :keyboard: 활동: 데이터 계층 구성 및 시드

다음 프롬프트 파일을 사용하세요.

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=512a97&color=ecd8ff)
>
> ```prompt
> /init-populate-octofit_db
> ```

1. 백엔드 변경 사항을 커밋하고 푸시합니다.

1. Mona가 검증하고 다음 단계를 열어 줄 때까지 기다립니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

다음 파일에 예상한 내용이 포함되어 있는지 확인하세요.

- `octofit-tracker/backend/src/config/database.ts`에 `octofit_db`와 `mongoose`가 포함되어 있습니다.
- `octofit-tracker/backend/src/scripts/seed.ts`에 시드 명령 설명이 포함되어 있습니다.

</details>
