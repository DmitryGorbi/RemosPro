const filter = document.querySelector('.filter');
const filterSelect = filter.querySelectorAll('.filter__select');
const filterSelectItems = filter.querySelectorAll('.filter__deal-item');
const buttonFilter = filter.querySelectorAll('.button-filter');
const buttonIcon = filter.querySelectorAll('.button-filter__icon');

const filterFieldset = filter.querySelectorAll('.filter__fieldset');
const buttonsTitle = filter.querySelectorAll('.button-filter__text');
const selectItemText = filter.querySelectorAll('.filter__deal-label');
console.log(filterFieldset);

// Обработчик на смену класса в мобильной версии
const dealItemsToggleMobile = (evt) => {
  let target = evt.target;

  if (target.matches('input[type="radio"]')) {
    for (let i = 0; i < filterSelectItems.length; i++) {
      filterSelectItems[i].classList.toggle('filter__deal-item--current');
    }
  }
};

filter.addEventListener('click', dealItemsToggleMobile);

// Убираю обработчик на десктопе

const mediaQueryFilter = window.matchMedia('(min-width: 1240px)');
if (mediaQueryFilter.matches) {
  filter.removeEventListener('click', dealItemsToggleMobile);
}

// Desktop Filter

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
    filter.addEventListener('click', inputClickSelect);
  });
};

const closeSelect = (select, icon) => {
  select.classList.add('filter__select--disabled');
  icon.classList.remove('button-filter__icon--rotate');
};

for (let i = 0; i < buttonFilter.length; i++) {
  openSelect(buttonFilter[i], filterSelect[i], buttonIcon[i]);
}

// Замена текста в кнопке

const changeButtonsTitle = (fieldset, title, text) => {
  fieldset.addEventListener('click', (evt) => {
    if (evt.target.matches('input[type="radio"]')) {
      title.textContent = evt.target.value;
      console.log(title);
      console.log(text);
    }
  });
};

for (let i = 0; i < buttonsTitle.length; i++) {
  changeButtonsTitle(filterFieldset[i], buttonsTitle[i], selectItemText[i]);
}

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
