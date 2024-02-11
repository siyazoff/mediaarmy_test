function showModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".modal__button_open");
const closeModal = document.querySelector(".modal__close");

if (modalOpen) {
  modalOpen.addEventListener("click", showModal);
}

if (closeModal) {
  closeModal.addEventListener("click", hideModal);
}

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    hideModal();
  }
});
