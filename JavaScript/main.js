const nav = document.getElementById('list-nav');

function create() {
 
   const divModalBackground = document.getElementById('modal_complet');

   if (divModalBackground) {
      divModalBackground.remove();
   }
  
   createModalNavigator();

}

function erase() {
   const divModalBackground = document.getElementById('modal_complet');
   divModalBackground.style.background = 'transparent';
   divModalBackground.style.backdropFilter = 'none';

   const popup = document.getElementById('modal_navigator');
   popup.classList.remove('transition-create');
   popup.classList.add('transition-erase');
   setTimeout(function() {
      divModalBackground.remove();
   }, 650);
}


function createModalNavigator() {
   const divModalBackground = document.createElement('div');
   divModalBackground.id = 'modal_complet';
   const popup = document.createElement('div');
   popup.id = 'modal_navigator';

   popup.innerHTML = `
      <img id="img_close" onclick="erase()" src="./assets/Used-Images/icon-menu-close.svg" alt="">
   `;
   
   const navi = nav.cloneNode(true)
   navi.style.flexDirection = 'column';
   navi.style.gap = '30px';
   navi.style.paddingTop = '80px';

   
   popup.appendChild(navi);
   
   divModalBackground.appendChild(popup);
   popup.classList.add('transition-create');
   document.body.appendChild(divModalBackground);
   

}