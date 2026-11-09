# GitHub Copilot 에이전트 모드로 애플리케이션 빌드하기

<!-- ![](../../actions/workflows/0-start-course.yml/badge.svg?branch=main) -->
<img src="https://github.com/user-attachments/assets/1b3ea5df-f18d-4ed8-9ae6-f96dc1861818" alt="octofit-tracker" width="300"/>

_한 시간 이내에 GitHub Copilot 에이전트 모드로 애플리케이션을 빌드해 보세요._

## 환영합니다

GitHub Copilot은 더 적은 오류로 코드를 더 빠르게 작성하도록 도와주어 많은 사랑을 받고 있습니다.
그렇다면 GitHub가 자연어로 작성된 요구 사항을 바탕으로 프레젠테이션, 로직, 데이터 계층을 갖춘 다중 계층 애플리케이션을 만들 수 있다면 어떨까요?
이 실습에서는 GitHub Copilot 에이전트 모드에 프롬프트를 입력하여 완전한 애플리케이션을 만듭니다.

- **대상**: GitHub Copilot, GitHub 기본 기능, 웹 개발 기초에 익숙한 중급 개발자
- **학습 내용**: GitHub Copilot 에이전트 모드와 이를 애플리케이션 개발에 사용하는 방법을 소개합니다.
- **빌드할 항목**: 고등학교 체육 교사의 입장에서 GitHub Copilot 에이전트 모드를 사용하여 피트니스 애플리케이션을 만듭니다.
- **필수 조건**: Skills 실습: <a href="https://github.com/skills/getting-started-with-github-copilot">GitHub Copilot 시작하기</a>.
- **소요 시간**: 이 과정은 한 시간 이내에 완료할 수 있습니다.

이 실습에서는 다음을 수행합니다.

1. 다중 계층 애플리케이션을 만들기 위해 미리 구성된 개발 환경을 시작합니다.
1. GitHub Copilot Chat에 프롬프트를 입력하고 편집 탭을 선택한 다음 편집/에이전트 드롭다운에서 에이전트 모드를 선택합니다.
1. 이 실습에서는 주로 최신 기본 LLM을 사용합니다.
1. 다른 LLM 모델을 사용하여 결과를 비교해 봅니다.
1. 각 단계에서 Copilot Chat 창의 더하기 `+` 아이콘을 눌러 새 Copilot Chat 세션을 엽니다.

### 실습 시작 방법

실습을 계정으로 복사하고, 여러분이 좋아하는 Octocat(Mona)이 첫 번째 학습 내용을 준비하도록 **약 20초 동안** 기다린 다음 **페이지를 새로 고치세요**.

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=hahaysh&template_name=skills-kr-build-applications-w-copilot-agent-mode&owner=%40me&name=skills-build-applications-w-copilot-agent-mode-exercise&description=Exercise:+Build+applications+with+GitHub+Copilot+agent+mode&visibility=public)

<details>
<summary>문제가 있나요? 🤷</summary><br/>

실습을 복사할 때 다음 설정을 권장합니다.

- 소유자로 리포지토리를 호스팅할 개인 계정 또는 조직을 선택합니다.

- 비공개 리포지토리는 Actions 시간을 사용하므로 공개 리포지토리를 만드는 것이 좋습니다.

실습이 20초 이내에 준비되지 않으면 리포지토리의 "Actions" 탭을 확인하세요(또는 `https://github.com/<YOUR-USERNAME>/<YOUR-REPO>/actions`를 방문하세요).

- 작업이 실행 중인지 확인하세요. 때로는 시간이 조금 더 걸릴 수 있습니다.

- 페이지에 실패한 작업이 표시되면 이슈를 제출해 주세요. 축하합니다. 버그를 찾으셨군요! 🐛

</details>

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)
