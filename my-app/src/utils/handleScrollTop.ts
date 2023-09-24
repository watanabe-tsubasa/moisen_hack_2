export const handleScrollToTop = (behavior: 'smooth'|'auto') => {
  window.scrollTo({top:0, behavior: behavior });
};