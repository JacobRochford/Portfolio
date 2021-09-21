(function (app) {
    app.portfolioItems = [];
    app.selectedItem = {};


  app.homepage = function () {
      setCopyRightDate();
      wireContactForm();
  };

  app.portfolio = function () {
    setCopyRightDate();
  };

  app.workItem = function () {
      setCopyRightDate();
      loadPageData();
      loadSpecificItem();
      setWorkItem();
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

    async function loadPageData() {
        const cacheData = sessionStorage.getItem('site-data');

        if (cacheData !== null) {
            app.portfolioItems = JSON.parse(cacheData);
        } else {
            const rawData = await fetch('sitedata.json');
            const data = await rawData.json();
            app.portfolioItems = data;
            sessionStorage.setItem('site-data', JSON.stringify(data));
        }
    }

    function loadSpecificItem() {
        const params = new URLSearchParams(window.location.search);
        let item = Number.parseInt(params.get('item'));

        if (item > app.portfolioItems.length || item < 1) {
            item = 1;
        }

        app.selectedItem = app.portfolioItems[item - 1];
        app.selectedItem.id = item;
    }


    function setWorkItem() {
        const header = document.getElementById('work-item-header');
        header.innerText = `0${app.selectedItem.id}. ${app.selectedItem.title}`;

        const image = document.getElementById('work-item-image');
        image.src = app.selectedItem.largeImage;
        image.alt = app.selectedItem.largeImageAlt;

        const projectText = document.querySelector('#project-text p');
        projectText.innerText = app.selectedItem.projectText;

        const originalTechnologiesList = document.querySelector('#technologies-list ul')
        const technologiesSection = document.getElementById('technologies-list');
        const ul = document.createElement('ul');

        app.selectedItem.technologiesList.forEach(el => {
            const li = document.createElement('li');
            li.innerText = el;
            ul.appendChild(li);
        })
        originalTechnologiesList.remove();
        technologiesSection.appendChild(ul);
    }






    // async function loadPageData() {
    //     const cacheData = sessionStorage.getItem('site-data');

    //     if (cacheData !== null) {
    //         app.portfolioItems = JSON.parse(cacheData);
    //     } else {
    //         const rawData = await fetch('sitedata.json');
    //         const data = await rawData.json();
    //         app.portfolioItems = data;
    //         sessionStorage.setItem('site-data', JSON.stringify(data));
    //     }

    // }

    // function loadSpecificItem() {
    //     const params = new URLSearchParams(window.location.search);
    //     let item = Number.parseInt(params.get('item'));

    //     if (item > app.portfolioItems.length || item < 1) {
    //         item = 1;
    //     }

    //     app.selectedItem = app.portfolioItems[item - 1];
    //     app.selectedItem.id = item;
    // }

    // function setWorkItem() {
    //     const header = document.getElementById('work-item-header');
    //     header.innerText = `0${app.selectedItem.id}. ${app.selectedItem.title}`;

    //     const image = document.getElementById('work-item-image');
    //     image.src = app.selectedItem.largeImage;
    //     image.alt = app.selectedItem.largeImageAlt;

    //     const projectText = document.querySelector('#project-text p');
    //     projectText.innerText = app.selectedItem.projectText;

    //     const originalTechnologiesList = document.querySelector('#technologies-list ul');
    //     const technologiesSection = document.getElementById('technologies-list');
    //     const ul = document.createElement('ul');

    //     app.selectedItem.technologiesList.forEach(el => {
    //         const li = document.createElement('li');
    //         li.innerText = el;
    //         ul.appendChild(li);
    //     });

    //     originalTechnologiesList.remove();
    //     technologiesSection.appendChild(ul);

    //     const challengesText = document.querySelector('#challenges-text p');
    //     challengesText.innerText = app.selectedItem.challengesText;
    // }







    // async function loadPageData() {
    //     const cacheData = sessionStorage.getItem('site-data');
        
    //     if (cacheData !== null) {
    //         app.portfolioItems = JSON.parse(cacheData);
    //     } else {
    //         const rawData = await fetch('sitedata.json');
    //         const data = await rawData.json();
    //         app.portfolioItems = data;
    //         sessionStorage.setItem('site-data', JSON.stringify(data));
    //     }
        
    // }
    
    // function loadSpecificItem() {
    //     const params = new URLSearchParams(window.location.search);
    //     let item = Number.parseInt(params.get('item'));
        
    //     if (item > app.portfolioItems.length || item < 1) {
    //         item = 1;
    //     }
        
    //     app.selectedItem = app.portfolioItems[item - 1];
    //     app.selectedItem.id = item;
    // }
    
    // function setWorkItem() {

    //     const header = document.getElementById('work-item-header');
    //     header.innerText = `0${app.selectedItem.id}. ${app.selectedItem.title}`;

    //     const image = document.getElementById('work-item-image');
    //     image.src = app.selectedItem.largeImage;
    //     image.alt = app.selectedItem.largeImageAlt;
        
    //     const projectText = document.querySelector('#project-text p');
    //     projectText.innerText = app.selectedItem.projectText;
        
    //     const originalTechnologiesList = document.querySelector('#technologies-list ul');
    //     const technologiesSection = document.getElementById('technologies-list');
    //     const ul = document.createElement('ul');

    //     app.selectedItem.technologiesList.forEach(el => {
    //         const li = document.createElement('li');
    //         li.innerText = el;
    //         ul.appendChild(li);
    //     })

    //     originalTechnologiesList.remove();
    //     technologiesSection.appendChild(ul);

    //     const challengesText = document.querySelector('#challenges-text p');
    //     challengesText.innerText = app.selectedItem.challengesText;
    // }
    

})((window.app = window.app || {}));
