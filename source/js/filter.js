const filter = document.querySelector('.filter');
const buttonsFilter = filter.querySelectorAll('.button-filter');
const buttonIcon = filter.querySelectorAll('.button-filter__icon');
const filterFieldset = filter.querySelectorAll('.filter__fieldset-js');
const buttonsTitle = filter.querySelectorAll('.button-filter__title');
const filterSelect = filter.querySelectorAll('.filter__select');

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

const mediaQueryFilter = window.matchMedia('(min-width: 1240px)');

// // Desktop Filter

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

// Open Select

const openSelect = (button, select, icon) => {
  const isEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      closeSelect(select, icon);
    }
  };

  const inputClickSelect = (evt) => {
    let target = evt.target;
    if (target.matches('input[type="radio"]')) {
      closeSelect(select, icon);
    }
  };

  button.addEventListener('click', () => {
    select.classList.toggle('filter__select--disabled');
    icon.classList.toggle('button-filter__icon--rotate');
    document.addEventListener('keydown', isEscKeydown);
    if (mediaQueryFilter.matches) {
      filter.addEventListener('click', inputClickSelect);
    }
  });
};

const closeSelect = (item, icon) => {
  item.classList.add('filter__select--disabled');
  icon.classList.remove('button-filter__icon--rotate');
};

for (let i = 0; i < buttonsFilter.length; i++) {
  openSelect(buttonsFilter[i], filterSelect[i], buttonIcon[i]);
}

// Замена текста в кнопке

const changeButtonsTitle = (fieldset, title) => {
  fieldset.addEventListener('click', (evt) => {
    if (evt.target.matches('input[type="radio"]')) {
      title.textContent = evt.target.value;
    }
  });
};

for (let i = 0; i < buttonsTitle.length; i++) {
  changeButtonsTitle(filterFieldset[i], buttonsTitle[i]);
}

// Закрытие попапа при клике вне

const windowClick = (select, button) => {
  window.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.filter__select') && !target.closest('.button-filter')) {
      select.classList.add('filter__select--disabled');
      button.classList.remove('button-filter__icon--rotate');
    }
  });
};

for (let i = 0; i < filterSelect.length; i++) {
  windowClick(filterSelect[i], buttonIcon[i]);
}
