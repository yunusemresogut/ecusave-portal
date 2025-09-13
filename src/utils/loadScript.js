function loadScript(src) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}