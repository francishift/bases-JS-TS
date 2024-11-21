import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

// Importar el CSS de UIkit
import 'uikit/dist/css/uikit.min.css';

// Importar la librería de JavaScript de UIkit
import UIkit from 'uikit';

// @ts-ignore
import Icons from 'uikit/dist/js/uikit-icons.min.js';

// Cargar los íconos en UIkit
UIkit.use(Icons);

// Hacer que UIkit esté disponible globalmente
(window as any).UIkit = UIkit;



// import './bases/01-const-let';
// import './bases/02-object';
// import './bases/03-arrays';
// import './bases/04-functions';
// import './bases/05-deses-obj';
// import './bases/06-deses-arr';
// import './bases/07-imp-exp';
// import './bases/08-promises';
// import './bases/09-fetch-api';
// import './bases/10-axios';
import './bases/11-async-await';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
   
  </div>

   <div class="uk-text-center"><button class="demo uk-button uk-button-primary" type="button"><span uk-icon="icon: bell" ></span> Click notificación uikit</button></div>
`;

// Añadir event listener al botón
let aver = true;
if (aver) { // Esta es la forma correcta de verificar si aver es true
    document.querySelector<HTMLButtonElement>('.demo')?.addEventListener('click', () => {
        UIkit.notification({message: '<span uk-icon=\'icon: bell\'; ratio: 2></span> Mensaje con icono'});
    });
}

