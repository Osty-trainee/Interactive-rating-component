const ratingForm = document.getElementById('rating-form');
const submitBtn = ratingForm.querySelector('.submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingText = document.getElementById('selected-rating');

ratingForm.addEventListener('change', () => {
  const formData = new FormData(ratingForm);
  const hasRating = formData.has('rating');

  if (hasRating) {
    submitBtn.classList.add('active');
  }
});

ratingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(ratingForm);
  const ratingValue = formData.get('rating');

  if (ratingValue) {
    selectedRatingText.textContent = ratingValue;

    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
  }
});

