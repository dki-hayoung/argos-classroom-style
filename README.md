# argos-classroom-publish
Argos Classroom 학교 관리자 사이트


/assets
  /scss
    /abstracts        // 추상적인 요소: 변수, 믹스인, 함수 등
      _variables.scss
      _mixins.scss
      _functions.scss

    /base             // 기본 스타일: 리셋, 타이포그래피, 기본 요소 등
      _reset.scss
      _typography.scss
      _base.scss

    /components       // 재사용 가능한 컴포넌트: 버튼, 카드, 폼 요소 등
      _buttons.scss
      _cards.scss
      _forms.scss

    /layout           // 레이아웃 관련 스타일: 그리드, 섹션, 헤더, 푸터 등
      _grid.scss
      _header.scss
      _footer.scss
      _sidebar.scss

    /pages            // 페이지별 스타일: 각 페이지에 특화된 스타일
      _home.scss
      _about.scss
      _contact.scss

    /themes           // 테마별 스타일: 다크 모드, 라이트 모드 등
      _dark.scss
      _light.scss

    /vendors          // 외부 라이브러리: 서드파티 라이브러리의 스타일 오버라이드
      _bootstrap.scss
      _normalize.scss

    main.scss         // 모든 SCSS 파일을 임포트하고 최종 빌드하는 파일

  /docs