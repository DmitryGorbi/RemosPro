// Универсальная функция для переключения класса активного элемента

const changeActiveClass = (items, disabledSelector) => {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((el) => {
        el.classList.remove(disabledSelector);
      });
      item.classList.add(disabledSelector);
    });
  });
};
