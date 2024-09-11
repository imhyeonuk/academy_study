// 문의 폼 이벤트 처리
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 페이지 새로고침 방지
  
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (name && message) {
      alert(`문의 감사합니다, ${name}님!`);
      // 폼 초기화
      document.getElementById('contact-form').reset();
  } else {
      alert('모든 필드를 작성해 주세요.');
  }
});
