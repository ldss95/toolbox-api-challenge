# ToolBox FullStack Challenge (API)

Esta API sirve como middleware entre un [API externa](https://echo-serv.tbxnet.com/explorer/#/Secret/get_secret_file__name_) y un cliente construido en React, la funcion principal del API es convertir la data provista en formato csv a JSON para su facil consumo del lado del cliente.

Para su construccion se usó Express y la version `14 de Node JS`
<br>
<br>

### Documentacion Swagger
Este proyecto esta documentado con Swagger JS Doc, podras ver la documentacion una vez levantes el servidor en el siguiente enlace:       
http://localhost:3000/v1/docs/
<br>
<br>

### Instalar dependencias
```
npm i
```

### Iniciar servidor de desarrollo
```
npm run dev
```

### Iniciar servidor de produccion
```
npm start
```

### Ejecutar pruebas
```
npm test
```

### Estructura
```
└-------- + src/
          |
          └---- app.js      # Archivo inicial de Express
          └---- server.js   # Arranca el servidor http
          └---- 404.html    # Template para respuesta 404
          └---- + v1/       # Folder con la version 1 del API
                └----- errors.js
                └----- routes.js
                └----- swaggerJsDoc.js
                |
                └----+ components/                # Contiene todas las posibles entidades del API
                |    └----+ files/                # Carpeta para el codigo de los endpoints /files
                |         └---- controller.js     # Controlador para los endpoints de /files
                |         └---- docs.js           # Documentacion para los endpoints de /files
                |         └---- routes.js         # Rutas /files
                |         └---- services.js       # Servicios usados por los controladores de los endpoints /files
                |         └---- tests.js          # Pruebas para los servicios y endpoints /files
                |
                └---- + utils/
                      └---- http.js               # Funcion para conectar con el API Externa 
```
