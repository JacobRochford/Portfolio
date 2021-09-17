(function (app) {
  app.homepage = function () {
      setCopyRightDate();
      wireContactForm();
  };

  app.portfolio = function () {
    setCopyRightDate();
  };

  app.workItem = function () {
    setCopyRightDate();
  };

  function setCopyRightDate() {
    const date = new Date();
    document.getElementById('copyrightYear').innerText = date.getFullYear();
  }
  
    function wireContactForm() {
        const contactForm = document.getElementById('contact-form');
        contactForm.onsubmit = contactFormSubmit;
    }

    function contactFormSubmit(e) {
        e.preventDefault();

        const contactForm = document.getElementById('contact-form');
        const name = contactForm.querySelector('#name');
        const email = contactForm.querySelector('#email');
        const message = contactForm.querySelector('#message');

        const mailTo = `mailto:jrochford357@gmail.com?subject=Contact From ${name.value}&body=${message.value}`;
        window.open(mailTo);
        name.value = '';
        email.value = '';
        message.value = '';
    }
})((window.app = window.app || {}));
