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

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const onTogglerClick = (item, evt) => {
  evt.preventDefault();
  const isOpen = item.getAttribute('aria-expanded') === 'false';
  item.setAttribute('aria-expanded', isOpen);
};

const disableBodyScroll = (block, item, selector) => {
  const v = block.querySelector(item);
  if (v.classList.contains(selector)) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }
};

export { changeActiveClass, isEscEvent, isEnterEvent, onTogglerClick, disableBodyScroll };
