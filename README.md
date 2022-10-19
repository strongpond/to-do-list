# wanted-pre-onboarding-frontend

## 📍 개요

: 간단한 로그인/회원가입 기능 구현과 TodoList CRUD 구현

---

## 📍기술 스택

<img src="https://img.shields.io/badge/React-0099c3?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Javascript-yellow?style=flat-square&logo=Javascript&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

---

## 📍 배포 링크

[클릭 👈](https://wanted-pre-onboarding-frontend-tawny.vercel.app//)

---

## 📍 프로그램 실행 방법

```
$ npm install
$ npm start
```

---

## 📍 파일구조

```
src
├─ api
│  ├─ auth.js
│  └─ todo.js
├─ components
│  ├─ ToDoInsert.js
│  ├─ ToDoList.js
│  ├─ ToDoListItem.js
│  ├─ UserFormBtn.js
│  └─ UserInput.js
├─ data
│  └─ formData.js
├─ pages
│  ├─ SignIn.js
│  ├─ SignUp.js
│  └─ ToDo.js
├─ styles
│  ├─ GlobalStyle.js
│  └─ theme.js
├─ Routes.js
├─ config.js
└─ index.js
```

---

## 📍 구현 사항

### 로그인/회원가입

- Assignment1 : 이메일 & 비밀번호 유효성 검사 ✅

- Assignment2 : 로그인 API 호출 및 경로 이동 ✅

  - 응답받은 JWT > 로컬 스토리지에 저장

- Assignment3 : 로그인 여부에 따른 리다이렉트 처리 ✅

  - 로컬 스토리지에 토큰 O, "/" 접속 ---> "/todo"로 리다이렉트 처리
  - 로컬 스토리지에 토큰 X, "/todo" 접속 ---> "/"로 리다이렉트 처리

  +추가구현: 로그아웃 기능

### Todo List

- Assignment4 : TodoList Create & Read ✅

- Assignment5 : TodoList Update & Delete ✅

---
