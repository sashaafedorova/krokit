document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');

      // Закрыть все активные элементы
      const activeItems = document.querySelectorAll('.accordion-item.active');
      activeItems.forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });
});
