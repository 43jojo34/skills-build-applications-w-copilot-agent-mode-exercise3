---
applyTo: "**"
---
# Octofit Tracker 다중 계층 애플리케이션 설정 지침

## 애플리케이션 목표

다음 기능을 갖춘 Octofit Tracker **다중 계층 애플리케이션**을 빌드합니다.

- 사용자 인증 및 프로필
- 활동 기록 및 추적
- 팀 생성 및 관리
- 경쟁형 리더보드
- 개인 맞춤형 운동 제안

## 명령 실행 규칙

- 명령에서 디렉터리를 변경하지 마세요.
- 항상 대상 경로를 직접 참조하세요.

## 전달 포트

- 8000: 공개(로직/API 계층)
- 5173: 공개(프레젠테이션 계층)
- 27017: 비공개(데이터 계층)

다른 포트를 전달하거나 공개하도록 제안하지 마세요.

## 프로젝트 구조

```text
octofit-tracker/
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    └── package.json
```

## 스택 요구 사항

### 프레젠테이션 계층

- Vite를 사용하는 React 19
- 탐색을 위한 react-router-dom
- 스타일링을 위한 bootstrap

### 로직 계층

- Node.js(LTS)
- Express
- TypeScript

### 데이터 계층

- MongoDB (`mongodb-org`)
- 데이터 액세스를 위한 Mongoose

## MongoDB 서비스 요구 사항

- mongod가 실행 중인지 확인할 때는 항상 `ps aux | grep mongod`를 사용하세요.
- `mongodb-org`는 공식 MongoDB 패키지입니다.
- `mongosh`는 공식 클라이언트 도구입니다.
- 스키마 및 데이터 작업에는 임시 원시 스크립트 대신 로직 계층의 Mongoose 모델을 사용하세요.
