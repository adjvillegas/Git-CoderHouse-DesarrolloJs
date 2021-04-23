// const app = new ProductoController(new ProductoModel(), new ProductoView());
const app = new ProductoController(new ProductoModel(), new ProductoView())

const routes = [
    { path: '/'       , action: 'bienvenida' },
    { path: '/pagina1', action: 'listar' },
    { path: '/pagina2', action: 'buscar' },
  ];

const ErrorComponent = (padre) => {
    $(padre).html("<h2>Error 404</h2>");
  }

//OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH). SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//BUSCAMOS LA ACCIÓN EN EL ARRAY routes QUE CORRESPONDE A LA RUTA CON FIND 
const findActionByPath = (path, routes) => routes.find(r => r.path == path || undefined);
// LISTA DE RUTAS (ASOCIAR A CADA ACCION)

  const router = () => {
    //OBTENER RUTA ACTUAL
    const path    = parseLocation(); 
    const { action = 'error' } = findActionByPath(path, routes) || {}; 
    // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
    switch (action) {
      case 'bienvenida':
      case 'agregar':
        app.agregar('#app');
        break;
      case 'listar':
        app.listar('#app');
        break;
      case 'buscar':
        app.buscar('#app');
        break;
      default:
        ErrorComponent('#app')
        break;
    }
  };
  
  