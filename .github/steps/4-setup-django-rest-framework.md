## 4단계: 다중 계층 애플리케이션의 API 호스팅 연결하기

이 단계에서는 **다중 계층 애플리케이션**의 API 호스팅을 완성합니다.

- 백엔드 API를 포트 `8000`에서 유지합니다.
- `$CODESPACE_NAME`을 사용하여 Codespaces를 인식하는 API URL 동작을 빌드합니다.
- `curl`로 엔드포인트를 검증합니다.

### :keyboard: 활동: API 기본 URL 및 호스트 지원 구성

> ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=flat-square&logo=github%20copilot&labelColor=512a97&color=ecd8ff)
>
> ```prompt
> Codespaces와 localhost용 Node.js API를 구성해 주세요.
>
> - 백엔드는 포트 8000에서 실행
> - $CODESPACE_NAME을 사용할 수 있으면 이를 사용하여 API 기본 URL 빌드:
>   https://$CODESPACE_NAME-8000.app.github.dev
> - $CODESPACE_NAME이 설정되지 않은 경우 localhost 지원 유지
> - curl로 /api/users와 /api/activities 확인
> ```

1. 변경 사항을 `build-octofit-app`에 커밋하고 푸시합니다.

1. Mona가 검증하고 다음 단계를 공유할 때까지 기다립니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

`octofit-tracker/backend/src/server.ts`에 다음 항목이 포함되어 있는지 확인하세요.

- `CODESPACE_NAME`
- `-8000.app.github.dev`

</details>
