# Mergington 고등학교를 위한 피트니스 앱을 GitHub Copilot 에이전트 모드로 빌드하기

## Mergington 고등학교의 OctoFit Tracker 애플리케이션 이야기

Paul Octo는 8년 넘게 Mergington 고등학교에서 체육 교사로 일해 왔습니다. 체육 수업에 대한 열정과 창의적인 접근 방식에도 불구하고, 학생들이 학교를 벗어나면 신체 활동이 줄어드는 상황을 점점 더 걱정하게 되었습니다. 많은 학생이 필수 체육 수업 외에는 거의 운동하지 않는다고 털어놓았습니다.
"체육 교육에서의 기술 통합" 전문성 개발 콘퍼런스에 참석한 Paul은 해결책을 만들겠다는 영감을 얻었습니다. 그는 다음을 가능하게 하는 무언가를 원했습니다.

1. 피트니스 추적을 재미있고 흥미롭게 만들기
2. 선의의 경쟁을 통해 긍정적인 또래 자극 만들기
3. 학생의 진행 상황을 원격으로 모니터링하기
4. 개인별 체력 수준을 바탕으로 맞춤형 안내 제공하기

## OctoFit Tracker의 탄생

Paul은 처음에 점심시간마다 메모장에 아이디어를 스케치했습니다. 학생들이 운동을 기록하고, 성취 배지를 얻고, 매월 피트니스 챌린지에서 경쟁할 수 있는 앱을 구상했습니다. 하지만 코딩 기초 지식만 갖춘 체육 교사에게 기술적인 부분은 벅차게 느껴졌습니다.
그때 Paul은 Mergington 고등학교 IT 부서 책임자인 Jessica Cat을 찾아갔습니다. Jessica는 리포지토리의 지침과 프롬프트를 사용할 것을 권했습니다.

### 기술 계획 단계

개발을 시작하기 전에 Paul과 Jessica는 OctoFit Tracker의 지침과 프롬프트를 주의 깊게 검토했습니다. 이를 통해 기술 표준을 준수하고 검증된 디자인 패턴을 활용하면서 OctoFit Tracker를 위한 견고한 기반을 마련했습니다.
Paul과 IT 팀은 함께 OctoFit Tracker의 핵심 요구 사항을 파악했습니다.

### 사용자 경험 목표

- 청소년을 위해 특별히 설계된 단순하고 직관적인 인터페이스
- 번거로움을 최소화하는 빠른 활동 기록
- 학생의 개인정보를 존중하는 소셜 기능
- 참여를 유지하기 위한 게임화 요소

## 현재 개발 상태

Paul과 Jessica는 GitHub Codespace 환경을 설정했으며 GitHub Copilot 에이전트 모드로 눈에 띄는 진전을 이루고 있습니다. OctoFit Tracker 프로토타입에는 다음 기능이 포함될 예정입니다.

- 작동하는 사용자 등록 시스템
- 달리기, 걷기, 근력 운동을 위한 기본 활동 기록
- 팀 경쟁을 위한 초기 프레임워크
- 학생의 진행 상황을 보여 주는 간단한 대시보드

## Paul의 다음 단계

기본 인프라를 갖춘 Paul은 이제 다음 작업에 집중하고 있습니다.

1. 다양한 활동 유형을 공정하게 비교하는 흥미로운 포인트 시스템 개발
2. 학생들의 다양한 관심사에 맞는 동기 부여 챌린지 만들기
3. 방해가 되지 않으면서 꾸준한 참여를 장려하는 알림 시스템 빌드
4. 추가 지원이나 동기 부여가 필요한 학생을 파악하는 데 도움이 되는 보고서 설계

IT 부서는 GitHub Copilot 에이전트 모드가 개발 속도를 높여 AI가 기술 구현의 상당 부분을 처리하는 동안 Paul이 교육적인 측면에 집중할 수 있게 한 점에 깊은 인상을 받았습니다. Jessica Cat은 특히 OctoFit Tracker가 사용자 지정 지침과 프롬프트 파일을 활용하는 방식에 만족했습니다.

### 워크숍 개요

이 워크숍에서는 다음을 수행합니다.

1. **GitHub Codespaces**를 사용하여 개발 환경 설정
2. **GitHub Copilot**을 사용하여 여러 기술에서 개발 가속화
3. Copilot 에이전트 모드의 도움을 받아 **OctoFit Tracker** 앱의 핵심 컴포넌트 빌드
4. **GitHub Copilot 에이전트 모드**를 사용하기 위한 모범 사례와 프롬프트 작성 기법 학습

### 애플리케이션 기능

**OctoFit Tracker**에는 다음 기능이 포함됩니다.

- 사용자 프로필
- 활동 기록 및 추적
- 팀 생성 및 관리
- 경쟁형 리더보드
- 개인 맞춤형 운동 제안

### GitHub Copilot Chat

- [GitHub Copilot Chat 시작하기](https://docs.github.com/en/copilot/how-tos/use-chat/get-started-with-chat?tool=vscode)
- [IDE에서 Chat 사용하기](https://docs.github.com/en/copilot/how-tos/use-chat/use-chat-in-ide?tool=vscode)

#### LLM 모델 참고 자료

- [GitHub Copilot에서 지원하는 AI 모델](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- [AI 모델 비교](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)
- [GitHub Copilot Chat의 AI 모델 변경하기](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-chat-model?tool=vscode)
- [GitHub Copilot 코드 완성의 AI 모델 변경하기](https://docs.github.com/en/copilot/how-tos/use-ai-models/change-the-completion-model?tool=vscode)

#### 프롬프트 엔지니어링

- [GitHub Copilot Chat을 위한 프롬프트 엔지니어링](https://docs.github.com/en/copilot/concepts/prompt-engineering)
- [GitHub Copilot 사용 방법: 프롬프트, 팁 및 사용 사례](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
- [IDE에서 GitHub Copilot 사용하기: 팁, 요령 및 모범 사례](https://github.blog/2024-03-25-how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/)

### OctoFit Tracker 피트니스 애플리케이션 기술 스택

다음과 같은 최신 웹 애플리케이션 스택을 사용합니다.

- **프런트엔드**: React.js
- **백엔드**: Django REST API Framework를 사용하는 Python
- **데이터베이스**: MongoDB
- **개발 환경**: GitHub Codespaces

### 워크숍 구성

1. **소개**
   - OctoFit Tracker 앱 개념 개요
   - GitHub Copilot Chat 모델

2. **필수 조건 설정**
   - GitHub Codespaces 설정
   - GitHub Copilot 및 Copilot Chat 확장이 최신 상태인지 확인

3. **GitHub Copilot 에이전트 모드를 사용한 신속한 프로토타이핑**
   - 프로젝트 구조 만들기
   - 상용구 코드 생성
   - 기본 모델, serializer, URL 및 보기 구현

4. **핵심 기능 빌드**
   - 활동 기록 및 추적
   - 사용자 프로필
   - 팀 관리
   - 리더보드 기능

5. **프런트엔드 및 백엔드 개발**
   - React 컴포넌트 설정
   - 반응형 UI 구현
   - 백엔드 API에 연결
   - Python Django 비즈니스 로직
   - MongoDB 데이터 계층
