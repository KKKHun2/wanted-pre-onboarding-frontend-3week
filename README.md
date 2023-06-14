# 원티드 프리온보딩 프론트엔드 4팀 - 3주차 과제

> 원티드 프리온보딩 과제 3주차 (검색창 구현 + 검색어 추천 기능 구현)
>
> 기간 : 2023년 1월 10일 ~ 2023년 1월 13일

<br />


## 📝프로젝트 설명

검색창 구현 + 검색어 추천 기능 구현

<br />

## 🖥프로젝트 실행 방법

```shell

# 프로젝트 clone

# npm 설치
$ npm install

# .env 파일 생성 및 해당 상수 삽입
REACT_APP_BASE_URL=http://localhost:4000/sick

# 프로젝트 실행
npm start

```

<br />

## 📌배포링크

https://magical-drink.surge.sh/

<br />
<br />

## 📰배포gif
<br />
<br />
 

#### 💡팀 코드 컨벤션

- git commit message 컨벤션

| 커밋 유형        | 의미                                                         |
| ---------------- | ------------------------------------------------------------ |
| Feat             | 새로운 기능 추가                                             |
| Fix              | 버그, 기능 수정                                              |
| Docs             | 문서 수정                                                    |
| Style            | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor         | 코드 리팩토링                                                |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore            | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design           | CSS 등 사용자 UI 디자인 변경                                 |
| Comment          | 필요한 주석 추가 및 변경                                     |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
| Setting          | prettier, eslint 등 전역 설정 변경, 삭제, 추가하는 경우      |
| ReadMe           | 리드미파일 추가, 수정, 삭제                                  |

<br />

## 💯과제목표

#### 사용자가 입력한 텍스트와 일치하는 부분 볼드처리

- 검색어 추천 목록과 입력한 텍스트랑 일치하는 글자가 화면에서 볼드 처리됩니다.

#### 검색어가 없을 시 "검색어 없음" 표출

- 검색된 문자열이 없을 경우 검색어 없음 표출

#### API 호출별로 로컬 캐싱 구현

- api 호출하는 검색어를 캐시 스토리지에 저장해서 같은 검색어 입력시 api 호출이 발생하지 않도록 합니다.

#### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- api 요청에 300ms의 debounce를 적용했습니다.
  사용자의 입력마다 API 호출 하는것이 아닌 사용자의 입력이 해당 시간동안 없을때만 호출하게 하여 횟수를 줄였습니다.

#### API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

- api를 호출할떄마다 메세지를 콘솔창에 출력해서 호출횟수 확인이 가능하도록 합니다.

#### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- useCallback 이용해서 ArrowDown,ArrowUp,Enter 상황에 각각의 기능 구현했습니다.


<br />

## 🛠사용기술

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" >
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" >
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" >
<img src="https://img.shields.io/badge/Antd-61DAFB?style=for-the-badge&logo=Antd&logoColor=white" >
 </div>

<br />
