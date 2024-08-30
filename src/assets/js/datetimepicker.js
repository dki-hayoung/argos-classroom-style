document.addEventListener('DOMContentLoaded', function () {
  flatpickr("#datepicker", {
    enableTime: true,           // 시간을 선택할 수 있도록 활성화
    enableSeconds: true,        // 초 단위를 활성화
    dateFormat: "Y-m-d H:i:S",  // 날짜와 시간을 초 단위까지 표시
//    dateFormat: "Y-m-d H:i",    // 날짜와 시간을 분 단위까지 표시
    time_24hr: true             // 24시간 형식으로 시간을 표시
  });
});

// 옵션
// enableTime: 시간을 선택할 수 있는 기능을 활성화
// dateFormat: 날짜 형식을 지정 (예: "Y-m-d H").
// minDate와 maxDate: 선택 가능한 최소 및 최대 날짜를 설정
// disable: 특정 날짜나 요일을 비활성화
// locale: 날짜와 시간 표시를 특정 로케일에 맞춰 설정
// JavaScript 파일 크기는 약 40KB 정도, CSS 파일은 약 10KB

// Flatpickr 공식 웹사이트 : https://github.com/flatpickr/flatpickr