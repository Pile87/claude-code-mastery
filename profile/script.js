// 스크롤 페이드인 (Intersection Observer)
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// 탭바 클릭 → 섹션 스크롤
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.getElementById(tab.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 스크롤 위치 기반 탭 활성화
const sectionIds = ['home', 'roles', 'projects', 'contact'];

function updateActiveTab() {
  const scrollY = window.scrollY;
  let current = 'home';

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.offsetTop - 120 <= scrollY) {
      current = id;
    }
  }

  tabs.forEach(tab => {
    tab.classList.toggle('tab-active', tab.dataset.target === current);
  });
}

window.addEventListener('scroll', updateActiveTab, { passive: true });
updateActiveTab();
