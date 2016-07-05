/******************************************************/
/** WowChakra mobile **********************************/
/** Author: ImperdibleSoft ****************************/
/** Website: http://www.imperdiblesoft.com ************/
/******************************************************/
/*
<script stc="http://lordfido.github.io/wowchakra-mobile/mobile-tutorial.js"></script>
*/

/* This file dynamically creates a very simple tutorial for mobile layout */
(function() {
  var debugging = true;
  var debug = function(param) {
    if (debugging) {
      console.log(param);
    }
  }

  // Point where everything is gonna be mount
  var mountPoint = document.body;

  // Add jQuery to the body, so we can use it
  var mountjQuery = function() {
    var jQuery = document.createElement('script');
    jQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';

    mountPoint.appendChild(jQuery);
  }
  // mountjQuery();

  // Add tutorial layout
  var mountTutorial = function() {

    // Create the tutorial wrapper
    var tutorialLayout = document.createElement('div');
    tutorialLayout.className = 'Tutorial';

    // Create backdrop
    var tutorialBackdrop = document.createElement('div');
    tutorialBackdrop.className = 'Tutorial-backdrop';

    // Create tutorial title and apends it to the wrapper
    var tutorialTitle = document.createElement('h1');
    tutorialTitle.className = 'Tutorial-title';
    tutorialTitle.innerText = 'Bienvenido a nuestra versión Mobile';
    tutorialLayout.appendChild(tutorialTitle);

    // Create a legend
    var tutorialLegend = document.createElement('div');
    tutorialLegend.className = 'Tutorial-legend';

    var explanationText = [];
    explanationText[0] = document.createElement('p');
    explanationText[0].innerText = 'Mantén pulsado unos segundos este menú para abrirlo.';

    explanationText[1] = document.createElement('p');
    explanationText[1].innerText = 'Cuando empiece a moverse, arrastra el dedo hacia arriba, y después levántalo de la pantalla.';

    // Append text to the legend
    for (var x in explanationText) {
      tutorialLegend.appendChild(explanationText[x]);
    }
    // Append the legend
    tutorialLayout.appendChild(tutorialLegend);

    // Create an 'OK' btn
    var okBtn = document.createElement('button');
    okBtn.className = 'Tutorial-okBtn';
    okBtn.innerText = 'Ok';
    tutorialLayout.appendChild(okBtn);
    // Detect okBtn click
    okBtn.addEventListener('click', handleOkBtnClick);

    // Mount everything on the root element
    mountPoint.appendChild(tutorialLayout);
    mountPoint.appendChild(tutorialBackdrop);
  };

  // Do this when okBtn has been clicked
  var handleOkBtnClick = function(e) {

    // Add a cookie to save this action
    document.cookie += 'hasReadTheTutorial=true';

    // Remove tutorial from screen
    var tutorialLayout = document.querySelector('.Tutorial');
    var tutorialBackdrop = document.querySelector('.Tutorial-backdrop');
    tutorialLayout.remove();
    tutorialBackdrop.remove();
  };

  // Return true|false depending on Tutorial's cookie
  var hasReadTheTutorial = function() {
    var cookies = document.cookie.split(';');
    var hasReadTheTutorial = false;

    for (var x in cookies) {
      var _cookie = cookies[x].split('=');
      if (_cookie[0] === 'hasReadTheTutorial' && (_cookie[1] === 'true' || _cookie[1] === true)) {
        hasReadTheTutorial = true;
        break;
      }
    }

    return hasReadTheTutorial;
  };

  // If the user has NOT read the tutorial, mount it
  if (!hasReadTheTutorial()) {
    mountTutorial();
  }
})();
