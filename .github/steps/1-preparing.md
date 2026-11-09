## 1단계: 최신 다중 계층 애플리케이션 실습 준비하기

**"GitHub Copilot 에이전트 모드로 애플리케이션 빌드하기"** 실습에 오신 것을 환영합니다! :robot:

이 실습에서는 OctoFit Tracker를 위한 **최신 다중 계층 애플리케이션**을 빌드합니다.

- **프레젠테이션 계층:** React 19
- **로직 계층:** Node.js + Express + TypeScript
- **데이터 계층:** MongoDB

### :keyboard: 활동: Codespaces 설정 및 작업 브랜치 게시

이 실습을 진행하려면 먼저 **자신의 복사본** 리포지토리에 Codespace를 만드세요.

1. 아래 버튼을 새 탭에서 열어 **Create Codespace** 페이지를 시작합니다. 기본 구성을 사용하세요.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

1. **Repository** 필드가 원본이 아닌 자신의 실습 복사본인지 확인한 다음, 녹색 **Create Codespace** 버튼을 클릭합니다.
   - ✅ 자신의 복사본: `{{full_repo_name}}`
   - ❌ 원본: `skills/build-applications-w-copilot-agent-mode`

1. 브라우저에서 Visual Studio Code가 로드되고 확장 설치가 완료될 때까지 기다립니다.

1. Copilot Chat을 열고 **Agent** 모드로 전환합니다.

1. 다음 프롬프트를 실행합니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=512a97&color=ecd8ff)
   >
   > ```prompt
   > build-octofit-app이라는 새 Git 브랜치를 만들고 게시해 주세요.
   > ```

1. 활성 브랜치가 `build-octofit-app`인지 확인합니다.

1. Mona가 다음 단계를 게시할 때까지 기다립니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

- 브랜치 이름이 정확히 `build-octofit-app`인지 확인하세요.
- 브랜치가 리포지토리에 푸시되었는지 확인하세요.

</details>
