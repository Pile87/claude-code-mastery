# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

빌드 도구 없이 순수 HTML/CSS/JS로 개발하는 **개발자 웹 이력서** 프로젝트. 빌드 단계, 패키지 매니저, 번들러가 없으며 Tailwind CSS는 CDN으로 로드한다.

**기술 스택**: HTML5, CSS3, Vanilla JavaScript, Tailwind CSS (CDN)

---

## 개발 서버 실행

별도 빌드 과정 없이 `index.html`을 직접 브라우저에서 열거나, VS Code Live Server 등 정적 파일 서버를 사용한다.

```bash
# Python으로 로컬 서버 실행 (포트 8000)
python3 -m http.server 8000

# Node.js가 있는 경우
npx serve .
```

---

## 아키텍처

단일 페이지 구성 (SPA 아님). 모든 콘텐츠는 `index.html` 한 파일 안의 섹션으로 나뉜다.

```
resume/
├── index.html      # 전체 마크업 및 섹션 구조
├── style.css       # Tailwind로 커버되지 않는 커스텀 스타일
├── script.js       # 스크롤 애니메이션, 다크모드 토글 등 인터랙션
└── assets/
    ├── profile.jpg
    └── favicon.ico
```

**섹션 순서**: Header → About → Skills → Experience → Projects → Education → Contact

---

## 디자인 토큰

| 항목 | 값 |
|------|-----|
| 기본 폰트 | Inter, sans-serif |
| 메인 컬러 | `blue-500` (#3B82F6) |
| 라이트 배경 | `#FFFFFF` |
| 다크 배경 | `#0F172A` |
| 최대 너비 | `max-w-4xl` (896px) |

---

## 개발 규칙

- Tailwind 유틸리티 클래스를 우선 사용하고, 커스텀 CSS는 `style.css`에 최소한으로 작성한다.
- JavaScript는 프레임워크 없이 Vanilla JS만 사용한다. DOM 조작은 `querySelector` / `addEventListener` 기반으로 작성한다.
- 반응형은 모바일 퍼스트로 작성한다 (`sm:` → `md:` → `lg:` 순서).
- 다크모드는 Tailwind `dark:` 클래스와 `<html>` 태그의 `class="dark"` 토글 방식으로 구현한다.
