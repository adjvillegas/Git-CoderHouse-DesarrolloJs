const app = new Controllers()

const loading = () => {

    app.delay('#Home')
    app.chargeOrderListAvailable()    
}

const routes = [
    { path: '/', action: 'bienvenida' },
    { path: '/product', action: 'lista' },
    { path: '/user', action: 'usuario' },
    { path: '/newuser', action: 'crear' },    
    
  ];

const ErrorComponent = (padre) => {
    $(padre).html("<h2>Error 404</h2>");
  }

//OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH). SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//BUSCAMOS LA ACCIÓN EN EL ARRAY routes QUE CORRESPONDE A LA RUTA CON FIND 
const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined);

const shiftNavigation = (route) => {
  $('html, body').animate({
    scrollTop: $(`${route}`).offset().top
  }, 500)
}

// LISTA DE RUTAS (ASOCIADA A CADA ACCION)

  const router = () => {
    //OBTENER RUTA ACTUAL
    const path    = parseLocation(); 
    const { action = 'error' } = findActionByPath(path, routes) || {}; 
    // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
    switch (action) {
      case 'bienvenida':
        app.welcome('#Home')
        break
      case 'lista':
        app.list('#Home')
        shiftNavigation("#Home")
        break
      case 'usuario':
        app.logon('#Home');
        break;
      case 'crear':
        app.newUser('#Home');
        break;
      default:
        app.errorComponent('#Home')
        break
    }
  };
  
  