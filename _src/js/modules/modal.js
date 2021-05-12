import MicroModal from 'micromodal';

export const createListenerModal = () => document.querySelector(`.success-modal__btn`).addEventListener(`click`, () => {
  MicroModal.close('modal-1');
})
