// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

// ------ CHANGE STYLESHEET --------------------------

function randomStyleOnLoad() {
  let stylesheet = document.createElement('link');
  stylesheet.rel  = 'stylesheet';
  stylesheet.id = "page-style";
  stylesheet.href = 'styles/style-' + (Math.floor(Math.random()*1)+1) + '.css';
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
  };

// randomStyleOnLoad();

let colourPalette = document.getElementById("colour-palette");

function changeStylesheet(style) {
  document.getElementById("page-style").setAttribute("href", style);
}

colourPalette.addEventListener("click", () => {
  let randomStyle = 'styles/style-' + (Math.floor(Math.random()*2)+1) + '.css';
  changeStylesheet(randomStyle);
});


  // ------ TOGGLE DARK MODE --------------------------
  let toggleSwitch = document.getElementById("dark-mode-switch");

  function toggleDarkMode() {
      var element = document.body;
      element.classList.toggle("dark-mode");
  }

  function toggleSunMoon() {
    var sunMoon = document.getElementById('sun-moon');
    sunMoon.classList.toggle("fa-moon");
    toggleSwitch.classList.toggle("white");
    sunMoon.classList.toggle("fa-sun");
  }

  toggleSwitch.addEventListener("click", () => {
    toggleDarkMode();
    toggleSunMoon();
  });


  // ------ MIDDLE NAV BUTTONS --------------------------

  const middleNavButtons = document.querySelectorAll(".nav-button"); // array

  function hideElement(target) {
    target.classList.toggle("hidden");
  }

  function hideAllElements(target) {
    if (!(target.classList.contains("hidden"))) {
      hideElement(target);
    };
  };

  function hideLinkedText(event) {
    console.log("hideLinkedText");
    // use custom attributes to link content's id to button
    var selectedContentId = event.target.getAttribute("data-linked-text");
    console.log(selectedContentId);

    const contentTabs = document.querySelectorAll(".tab");
    var selectedContent = document.getElementById(selectedContentId);

    // if element is hidden, hide all others and show this one
    if (selectedContent.classList.contains("hidden")) {
      contentTabs.forEach(hideAllElements);
      hideElement(selectedContent);
    }
    // if element is showing, hide it (and all others)
    else {
      contentTabs.forEach(hideAllElements);
    }
  }

  middleNavButtons.forEach(function(button) {
      button.addEventListener("click", hideLinkedText)
  });


  // ------ SCROLL TO TOP BUTTON --------------------------

  let scrollBtn = document.getElementById("scrollToTop");

  function showScrollBtn() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  window.onscroll = function() {showScrollBtn()};

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  scrollBtn.addEventListener("click", () => {
    scrollToTop();
  });

});
