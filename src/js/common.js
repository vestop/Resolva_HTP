/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/**
Choose DOM - nodes
 */
const mainModalNode = document.body;
const modalNode = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.close-button');

/**
  Toogle node's definition
 */
function toogleTextNode() {
  if ($(window).width() <= 1100) {
    $(this).next().slideToggle(300);
    $(this).find('.addit-services-arrow')
        .toggleClass('addit-services-arrow_rotate');
  }
}

/**
  Show modal node's definition
 */
function showModal() {
  event.preventDefault();
  document.body.classList.toggle('overflow-hidden');
  modalNode.classList.toggle('modal-container_close');
  animateCSS('.modal-container', 'zoomIn');
}

/**
  Close modal node's definition
 */
function closeModal() {
  event.preventDefault();
  document.body.classList.toggle('overflow-hidden');
  animateCSS('.modal-container', 'zoomOut', () => {
    modalNode.classList.toggle('modal-container_close');
  });
}

/**
  Animations from animate.css
 */
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

/**
  Applying events after loading the DOM
 */
window.addEventListener('DOMContentLoaded', () => {
  /**
  Dilocation and call events
 */
  mainModalNode.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('button-modal')) {
      showModal();
    } else {
      return;
    }
  });

  // Overlay close areas
  modalNode.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay')) {
      closeModal();
    } else {
      return;
    }
  });


  // Close modal window
  closeModalButton.addEventListener('click', closeModal);
});


/**
  jQuery events
 */
$(document).ready(function() {
  // Toggle button
  $('.addit-services-header').on('click', toogleTextNode);

  // Phone validate
  $('.phone-input').mask('+375 (00) 000-00-00', {
    clearIfNotMatch: true,
  });

  $('.modal-form__phone-input').mask('+375 (00) 000-00-00', {
    clearIfNotMatch: true,
  });
});
