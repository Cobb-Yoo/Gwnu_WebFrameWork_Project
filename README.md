# Gwnu_WebFrameWork_Project

팀원 : 김서연, 유형진, 최지우

목표 : url를 입력받아 해당 페이지에 해당되는 element에 대해서 localstorage에 저장하는 간단한 크롤러를 웹으로 만든다.

---

## 2021년 9월 7일 회의

    어떤 주제를 가지고 한학기 동안 프로젝트를 할지 의논 하였다.
    우리는 한 학기동안 해당 수업의 과제로 웹 크롤링을 하는 웹 앱을 구현한다.

    서류정리 및 관리 프로그램

        흩어져 있는 서류들을 한번에 관리한다.

    지역커뮤니티 프로그램

        에브리타임처럼 사용자들이 정보를 나누는 프로그램.
        동일한 지역에 있는 사람만 사용할 수 있다.

    팀플 관리 프로그램

        대학생들을 대상으로 하는 프로그램.
        과제로 받은 팀프로젝트가 잘 진행 될 수 있도록 한다.

    웹 크롤러 프로그램

        url를 입력받아 해당 페이지에 해당되는 요소를 저장한다.

## 2021년 9월 27일 회의

    어떤 라이브러리를 사용할 것인가?

    	단기간에 목표(크롤링, 동적 gui == 드래그앤드랍)를 달성하기 위해서 학습하기 용이한 Vue.js기반의 웹앱을 목표로한다.

    사용자가 어떤식으로 사용할 수 있는가?

    	크롤링을 사용하는데 단순한 반복으로 데이터를 모으는 경우가 많다. 프로그래밍을 학습한 사람은 단순한 크롤러를 만드는것은 어렵지 않다. 하지만 대다수의 사람은 프로그래밍을 학습하지 않았고 간단한 크롤링 작업을 원한다.
    	그렇기 때문에 어린아이들의 프로그래밍 학습도구인 스캐치와 엔트리 같이 블록코딩의 형식으로 크롤러를 만들 수 있도록 한다.

    서버를 사용할 것인가?

    	블록코딩으로 스크립트를 구현할 수 있게 된다면 호스팅하기 위한 서버만 사용하며 그 외의 데이터 저장, 로그인, 사용자관리 등을 위한 서버는 사용하지 않을 예정이다.

    데이터 저장은 어떻게 하는가?

    	프리뷰를 통해 블록구조에 따라 실시간으로 일부결과를 확인하고, 저장은 csv 또는 txt 확장자로 처리한다.
    	사용자의 로컬디렉터리에 저장공간을 확보하여 저장하도록한다.

    디자인은 어떻게 할 것인가?
    	기존의 블록코딩 프로그램 GUI와 같이 상호작용과 가시성을 우선한다.

### 1차 와이어프레임

<img src="./9월 27일.png"  width="700" height="370">
