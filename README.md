# parvis
## 디앤아이파비스 코딩 테스트

### v 1.0.1 : 메인, 로그인 페이지 추가, 메뉴(Header) 컴포넌트 추가, react-router-dom을 이용한 Route 설정
- src/components
: Header.jsx 파일 추가(메뉴 관련 컴포넌트), index.js 파일 추가(컴포넌트 관련 설정)
- src/pages
: Main.jsx 파일 추가(메인 페이지), Login.jsx(로그인 페이지), index.js 파일 추가(페이지 관련 설정)
- src/scss
: Main.scss, Login.scss, Header.scss, index.scss (scss 파일 추가)
- src/App.jsx : react-router-dom 관련 BrowserRouter, Route, Switch 추가 및 수정
- src/App.scss : App.jsx 파일 관련 scss 수정

### v 1.0.0 : 프로젝트 기본 설정 파일 생성
- .babelrc : 바벨 설정(preset-env, preset-react 속성 설정)
- package.json : 패키지 설정 파일
- webpack.config.js : 웹팩 설정(js, jsx, scss 등 설정)
- public/index.html : 기본 HTML 파일 추가
- src/App.jsx, src/App.scss : 웹팩 및 바벨 테스트를 위해 임시 jsx, scss 파일 추가
- src/index.js : base index.js 파일 추가


### npm modules 설치

#### ```npm install```

### 웹팩 dev-server 실행

#### ```npm run start```

### 웹팩 production 모드 빌드

#### ```npm run build```

### 웹팩 development 모드 빌드

#### ```npm run dev```
