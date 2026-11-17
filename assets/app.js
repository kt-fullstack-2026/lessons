// 코드 복사 버튼: 프롬프트($)는 빼고 복사한다
document.querySelectorAll('.md pre > code').forEach(function (code) {
  var b = document.createElement('button');
  b.className = 'copy-btn'; b.type = 'button'; b.textContent = '복사';
  b.addEventListener('click', function () {
    var c = code.cloneNode(true);
    c.querySelectorAll('.prompt').forEach(function (n) { n.remove(); });
    navigator.clipboard.writeText(c.textContent).then(function () {
      b.textContent = '복사됨'; setTimeout(function () { b.textContent = '복사'; }, 1200);
    });
  });
  code.parentNode.appendChild(b);
});

// 키보드: ←/→ 절 이동, P 발표 모드(글자 크게)
(function () {
  var prev = document.body.getAttribute('data-prev'), next = document.body.getAttribute('data-next');
  try { if (localStorage.getItem('present') === '1') document.body.classList.add('present'); } catch (e) {}
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if ((e.key === 'ArrowRight' || e.key === 'PageDown') && next) location.href = next;
    else if ((e.key === 'ArrowLeft' || e.key === 'PageUp') && prev) location.href = prev;
    else if (e.key === 'p' || e.key === 'P') {
      var on = document.body.classList.toggle('present');
      try { localStorage.setItem('present', on ? '1' : '0'); } catch (e2) {}
    }
  });
})();
