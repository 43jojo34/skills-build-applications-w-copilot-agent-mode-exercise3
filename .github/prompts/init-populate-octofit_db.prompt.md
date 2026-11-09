---
mode: 'agent'
model: GPT-5.5
description: 'Octofit 다중 계층 애플리케이션용 MongoDB 구성 및 octofit_db 시드'
---

`octofit-tracker/backend`의 데이터 계층을 설정하고 데이터를 채우세요.

요구 사항:

1. Mongoose와 함께 MongoDB를 사용하세요.
2. 포트 `27017`의 로컬 MongoDB와 데이터베이스 `octofit_db`용 연결 문자열을 사용하세요.
3. 사용자, 팀, 활동, 리더보드, 운동을 위한 Mongoose 모델을 만드세요.
4. `src/scripts/seed.ts`에 시드 스크립트를 추가하세요.
5. 시드 스크립트 주석 또는 로그에 다음 도움말/설명 텍스트를 포함하세요.
   `Seed the octofit_db database with test data`.
6. 모든 컬렉션에 현실적인 샘플 데이터를 삽입하세요.
7. API 라우트 응답으로 데이터 생성을 확인하세요.
