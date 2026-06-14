# 개발자 웹 이력서 개발 로드맵

## 기술 스택
- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS (CDN)

---

## 이력서 구성 섹션

### 1. Header / Hero
- 이름, 직함 (예: Frontend Developer)
- 한 줄 소개
- 연락처 아이콘 링크 (GitHub, Email, LinkedIn)

### 2. About Me (소개)
- 간단한 자기소개 (3~5문장)
- 개발 철학 또는 관심 분야

### 3. Skills (기술 스택)
- 언어: HTML, CSS, JavaScript, TypeScript
- 프레임워크/라이브러리: React, Node.js
- 도구: Git, GitHub, Figma, VS Code

### 4. Experience (경력)
- 회사명, 직책, 재직 기간
- 주요 업무 및 성과 (bullet point)
- 예시 1개 이상

### 5. Projects (프로젝트)
- 프로젝트명, 기간, 기술 스택
- 설명 및 GitHub 링크
- 예시 2~3개

### 6. Education (학력)
- 학교명, 전공, 졸업 연도

### 7. Contact (연락처)
- 이메일, GitHub 링크
- 간단한 CTA 문구

---

## 개발 단계

### Phase 1 — 구조 설계
- [ ] 프로젝트 폴더 및 파일 생성 (`index.html`, `style.css`, `script.js`)
- [ ] Tailwind CSS CDN 연결
- [ ] 전체 HTML 섹션 뼈대 작성
- [ ] 기본 레이아웃 설정 (nav, main, footer)

### Phase 2 — 스타일링
- [ ] 색상 팔레트 및 타이포그래피 정의
- [ ] 다크/라이트 테마 결정
- [ ] Tailwind 유틸리티 클래스로 각 섹션 스타일링
- [ ] 반응형 레이아웃 구현 (모바일 → 데스크탑)

### Phase 3 — 콘텐츠 작성
- [ ] 이름, 직함, 소개 문구 작성
- [ ] 경력 및 프로젝트 내용 작성
- [ ] 기술 스택 목록 작성
- [ ] 소셜 링크 및 연락처 작성

### Phase 4 — 인터랙션 구현
- [ ] 스크롤 시 네비게이션 고정 (sticky nav)
- [ ] 섹션 진입 시 페이드인 애니메이션
- [ ] 스무스 스크롤 내비게이션
- [ ] 다크모드 토글 (선택 사항)

### Phase 5 — 마무리 및 배포
- [ ] 크로스 브라우저 확인 (Chrome, Safari, Firefox)
- [ ] 모바일 반응형 최종 확인
- [ ] 성능 최적화 (이미지 압축 등)
- [ ] GitHub Pages 또는 Netlify 배포

---

## 파일 구조

```
resume/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── profile.jpg
    └── favicon.ico
```

---

## 디자인 가이드

| 항목 | 값 |
|------|-----|
| 기본 폰트 | Inter, sans-serif |
| 메인 컬러 | #3B82F6 (Tailwind blue-500) |
| 배경 | #FFFFFF / #0F172A (다크모드) |
| 텍스트 | #1E293B / #F1F5F9 (다크모드) |
| 최대 너비 | max-w-4xl (896px) |

---

## 이력서 예시 내용

```
이름: 김개발
직함: Frontend Developer
소개: 사용자 경험을 중시하는 프론트엔드 개발자입니다.
      클린 코드와 성능 최적화에 관심이 많습니다.

경력:
  - (주)테크스타트업 | Frontend Developer | 2022.03 ~ 현재
    · React 기반 웹 서비스 개발 및 유지보수
    · 페이지 로딩 속도 40% 개선

프로젝트:
  - 포트폴리오 웹사이트 (2024)
  - 날씨 대시보드 앱 (2023)

학력:
  - 한국대학교 컴퓨터공학과 졸업 (2022)
```
