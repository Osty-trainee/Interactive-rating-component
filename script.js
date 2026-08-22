// Находим все необходимые элементы на странице
const ratingForm = document.getElementById('rating-form');
const submitBtn = ratingForm.querySelector('.submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingText = document.getElementById('selected-rating');

// 1. Следим за выбором оценки, чтобы подсветить кнопку Submit
ratingForm.addEventListener('change', () => {
  const formData = new FormData(ratingForm);
  const hasRating = formData.has('rating');

  // Если оценка выбрана, добавляем класс active, если нет — убираем
  if (hasRating) {
    submitBtn.classList.add('active');
  }
});

// 2. Обрабатываем отправку формы (клик на Submit)
ratingForm.addEventListener('submit', (event) => {
  // Отменяем перезагрузку страницы, которая происходит по умолчанию
  event.preventDefault();

  // Получаем выбранное значение из формы
  const formData = new FormData(ratingForm);
  const ratingValue = formData.get('rating');

  // Если значение успешно получено
  if (ratingValue) {
    // Вставляем выбранную цифру в текст карточки благодарности
    selectedRatingText.textContent = ratingValue;

    // Прячем экран оценки и показываем экран благодарности
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
  }
});

