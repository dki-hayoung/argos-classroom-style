document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.docs-sidebar a');
  const componentSections = document.querySelectorAll('.component-section');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const componentId = e.target.dataset.component + '-component';

      // 모든 컴포넌트 섹션 숨기기
      componentSections.forEach(section => {
        section.style.display = 'none';
      });

      // 모든 링크에서 active 클래스 제거
      links.forEach(link => {
        link.classList.remove('active');
      });

      // 선택된 컴포넌트 섹션만 표시
      const activeSection = document.getElementById(componentId);
      if (activeSection) {
        activeSection.style.display = 'block';
      }

      // 클릭된 링크에 active 클래스 추가
      e.target.classList.add('active');
    });
  });

  // 페이지 로드 시 첫 번째 컴포넌트 섹션만 표시하고 나머지는 숨김
  componentSections.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
  });

  // 첫 번째 링크에 active 클래스 추가
  if (links.length > 0) {
    links[0].classList.add('active');
  }

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const codeBlock = this.closest('.code-block').querySelector('code').innerText.trim();
      navigator.clipboard.writeText(codeBlock).then(() => {
        const originalText = this.innerText;
        this.innerText = 'Copied!';
        setTimeout(() => {
          this.innerText = originalText;
        }, 1000); // 1초 후에 다시 "Copy"로 변경
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const colorItems = document.querySelectorAll('.color-item');

  colorItems.forEach(item => {
    const colorCode = item.getAttribute('data-color');
    const title = item.querySelector('.color-title');
    const hexButton = item.querySelector('.hex-button');

    // 툴팁 생성
    const titleTooltip = document.createElement('span');
    titleTooltip.classList.add('tooltip');
    titleTooltip.textContent = `Copy "${title.innerText}" to clipboard`;
    item.appendChild(titleTooltip);

    const hexTooltip = document.createElement('span');
    hexTooltip.classList.add('tooltip', 'hex');
    hexTooltip.textContent = `Copy "${colorCode}" to clipboard`;
    item.appendChild(hexTooltip);

    // 타이틀 hover 시 툴팁 표시
    title.addEventListener('mouseenter', function () {
      titleTooltip.style.opacity = '1';
    });

    title.addEventListener('mouseleave', function () {
      titleTooltip.style.opacity = '0';
    });

    // Hex 버튼 hover 시 툴팁 표시
    hexButton.addEventListener('mouseenter', function () {
      hexTooltip.style.opacity = '1';
    });

    hexButton.addEventListener('mouseleave', function () {
      hexTooltip.style.opacity = '0';
    });

    // 타이틀 클릭 시 타이틀명 복사
    title.addEventListener('click', function () {
      const originalText = titleTooltip.textContent; // 원래 텍스트 저장
      navigator.clipboard.writeText(title.innerText).then(() => {
        titleTooltip.textContent = 'Copied!';
        setTimeout(() => {
          titleTooltip.textContent = originalText; // 원래 텍스트로 복원
          titleTooltip.style.opacity = '0';
        }, 1500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });

    // Hex 버튼 클릭 시 헥사코드 복사
    hexButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const originalText = hexTooltip.textContent; // 원래 텍스트 저장
      navigator.clipboard.writeText(colorCode).then(() => {
        hexTooltip.textContent = 'Copied!';
        setTimeout(() => {
          hexTooltip.textContent = originalText; // 원래 텍스트로 복원
          hexTooltip.style.opacity = '0';
        }, 1500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });

  document.querySelectorAll('.color-item').forEach(function(item) {
    const colorCode = item.getAttribute('data-color');
    item.style.backgroundColor = colorCode;
  });
});

