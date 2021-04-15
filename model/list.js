// Simula un Json, podrías insertar mas productos en este apartado para probar
const PRODUCTLIST = [
    {
        "id": 0,
        "descripcion": "Almanaque Personalizado 2021",
        "nota": "Papel Ilustración de 300 grs. <br> Full Color",
        "stock": 10,
        "precio": 15.00,
        "iva": 1.21,
        "precioDesde": "1.500,00",
        "cantidadDesde": "100",
        "medicionDesde": "unidades",
        "categoria": 0,
        "archive": "product1.jpg"
    }, {
        "id": 1,
        "descripcion": "STICKERS EN VINILO",
        "nota": "Resiste el agua y la luz solar <br> Full Color. <br> Medida a elección.",
        "stock": 12,
        "precio": 3.32,
        "iva": 1.105,
        "precioDesde": "829,00",
        "cantidadDesde": "250",
        "medicionDesde": "unidades",
        "categoria": 1,
        "archive": "producto-auto.jpg"                
    }, {
        "id": 2,
        "descripcion": "PLOTEADO",
        "nota": "Full color y la más alta calidad. <br> Apto para uso en exterior e interior.",
        "stock": 21,
        "precio": 722.00,
        "iva": 1.21,
        "precioDesde": "722,00",
        "cantidadDesde": "1",
        "medicionDesde": "Mt2",
        "categoria": 2,
        "archive": "producto-ploteado.png"             
    }, {
        "id": 3,
        "descripcion": "Talonarios",
        "nota": "Papel obra de 75 grs. <br> Impresión blanco y negro <br> Engomados",
        "stock": 21,
        "precio": 4.22,
        "iva": 1.21,
        "precioDesde": "422,00",
        "cantidadDesde": "100",
        "medicionDesde": "unidades",
        "categoria": 3,
        "archive": "producto-talonario.png"        
    }, {
        "id": 4,
        "descripcion": "HOJA MEMBRETADA",
        "nota": "Papel a elección <br> Diversos tamaños - A4, Oficio, Carta",
        "stock": 21,
        "precio": 9.64,
        "iva": 1.21,
        "precioDesde": "4.821,00",
        "cantidadDesde": "500",
        "medicionDesde": "unidades",
        "categoria": 4,
        "archive": "producto-membretado.jpeg"        
    }, {
        "id": 5,
        "descripcion": "LLAVEROS PERSONALIZADOS",
        "nota": "Papel Ilustración de 300 grs. <br> Full Color",
        "stock": 21,
        "precio": 15.5,
        "iva": 1.21,
        "precioDesde": "1.550,00",
        "cantidadDesde": "100",
        "medicionDesde": "unidades",
        "categoria": 5,
        "archive": "producto-publicitario.png"        
    }, {
        "id": 6,
        "descripcion": "TARJETAS PERSONALES",
        "nota": "Papel Ilustración de 300 grs. <br> Full Color <br> Mínimo 100 unidades.",
        "stock": 21,
        "precio": 3.05,
        "iva": 1.21,
        "precioDesde": "609,00",
        "cantidadDesde": "200",
        "medicionDesde": "unidades",
        "categoria": 6,
        "archive": "producto-tarjetas.jpeg"         
    }, {
        "id": 7,
        "descripcion": "FOLLETOS / FLYERS",
        "nota": "Papel Ilustración de 150 grs. <br> Imprenta Offset.",
        "stock": 21,
        "precio": 1.8,
        "iva": 1.21,
        "precioDesde": "1.800,00",
        "cantidadDesde": "1000",
        "medicionDesde": "unidades",
        "categoria": 7,
        "archive": "producto-folletos.png"        
    }
];

const CATEGORIA = [
    {
        "id": 0,
        "value": "Almanaques",
        "descripcion": "Almanaques"
    }, {
        "id": 1,
        "value": "Autoadhesivos",
        "descripcion": "Autoadhesivos"
    }, {
        "id": 2,
        "value": "GranFormato",
        "descripcion": "Gran Formato"
    }, {
        "id": 3,
        "value": "PapeleriaComercial",
        "descripcion": "Papeleria Comercial"
    }, {
        "id": 4,
        "value": "PapelesResmas",
        "descripcion": "Papeles y Resmas"
    }, {
        "id": 5,
        "value": "Publicidad",
        "descripcion": "Publicidad"
    }, {
        "id": 6,
        "value": "Tarjetas",
        "descripcion": "Tarjetas"
    }, {
        "id": 7,
        "value": "Volantes",
        "descripcion": "Volantes"
    }                      
]

const MYOUTPUT = {
    "descripcion": "Producto",
    "cantidad": "Cantidad",
    "precio": "Precio Uni.",
    "iva": "Ali. Impuesto"
  }