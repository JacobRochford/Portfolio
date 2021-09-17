(function (app) {
    app.homepage = function () {
      
        setCopyRightDate();
    };
    
    app.portfoliopage = function () {
        setCopyRightDate();
    };

    app.workitempage = function () {
        setCopyRightDate();
    }

  function setCopyRightDate() {
    const date = new Date();
    document.getElementById('copyrightYear').innerText = date.getFullYear();
    }
    
})(window.app = window.app || {});
