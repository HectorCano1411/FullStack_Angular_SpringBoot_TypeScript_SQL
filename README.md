
# README.md - Documentación del Proyecto API REST

Este README proporciona una guía detallada sobre cómo construir y revisar la solución del proyecto API REST. Incluye información sobre el entorno de desarrollo, las dependencias del proyecto, cómo ejecutar y probar la aplicación, y cómo manejar errores.

---

#### Entorno de Desarrollo

El proyecto API REST está desarrollado utilizando las siguientes tecnologías:

- **Java:** Versión 21
- **Spring Boot:** Versión 3.2.6
- **Angular CLI:** Versión 18.0.1
- **Node.js:** Versión 20.13.1
- **npm:** Versión 10.8.0

#### Estructura del Proyecto

El proyecto consta de dos partes principales: el backend desarrollado en Spring Boot y el frontend desarrollado en Angular.

- **Backend:** Se encuentra en la carpeta `spring-boot-backend-apirest`.
- **Frontend:** Se encuentra en la carpeta `app-client-frontEnd`.

---

#### Backend (Spring Boot)

##### Dependencias del Proyecto (archivo `POM.xml`)

El archivo `POM.xml` contiene todas las dependencias del proyecto de Spring Boot. A continuación se enumeran las principales dependencias:

- `spring-boot-starter-data-jpa`: Dependencia para el manejo de datos con JPA.
- `spring-boot-starter-web`: Dependencia para el desarrollo de aplicaciones web.
- `spring-boot-starter-webflux`: Dependencia para la programación reactiva.
- `spring-boot-starter-json`: Dependencia para el manejo de JSON.
- `lombok`: Biblioteca para la generación automática de código.
- `spring-boot-devtools`: Dependencia para herramientas de desarrollo en tiempo de ejecución.
- `h2`: Base de datos en memoria para desarrollo.
- `mysql-connector-j`: Conector MySQL para producción.
- `spring-boot-starter-test`: Dependencia para pruebas unitarias y de integración.
- `springdoc-openapi-starter-webmvc-ui`: Integración de OpenAPI para documentación de la API.
- `springfox-boot-starter`: Integración de Swagger para documentación de la API.

##### Configuración y Ejecución del Proyecto

1. Clonar el repositorio desde GitHub.
2. Importar el proyecto en un IDE compatible con Spring Boot.
3. Configurar el archivo `application.properties` con los datos de la base de datos.
4. Ejecutar la aplicación Spring Boot.

#### Frontend (Angular)

##### Dependencias del Proyecto (archivo `package.json`)

El archivo `package.json` contiene todas las dependencias del proyecto de Angular. A continuación se enumeran las principales dependencias:

- `@angular-devkit/architect`: Arquitectura CLI de Angular.
- `@angular-devkit/core`: Core de la CLI de Angular.
- `@angular-devkit/schematics`: Esquemas de la CLI de Angular.
- `@schematics/angular`: Esquemas de Angular.
- `@angular/common`: Módulo común de Angular.
- `@angular/router`: Enrutador de Angular.
- `rxjs`: Biblioteca para programación reactiva.
- `sweetalert2`: Biblioteca para mostrar diálogos modales personalizados.

##### Configuración y Ejecución del Proyecto

1. Clonar el repositorio desde GitHub.
2. Abrir la carpeta `app-client-frontEnd` en una terminal.
3. Ejecutar `npm install` para instalar todas las dependencias.
4. Ejecutar `ng serve` para iniciar el servidor de desarrollo de Angular.

---
## Uso de Especificación de API Rest

El proyecto utiliza OpenAPI para especificar la API Rest. La especificación se encuentra disponible en el siguiente enlace: [OpenAPI Specification]([ruta/a/especificacion/openapi](http://localhost:8080/v3/api-docs)).
[http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)


### Implementación de servicios Api REST

Los servicios de la API REST han sido implementados de acuerdo con la especificación OpenAPI. Se ha utilizado Swagger UI como componente de publicación basado en código para visualizar y probar la API. Puedes acceder a Swagger UI en el siguiente enlace: [Swagger UI]([ruta/a/swagger/ui](http://localhost:8080/swagger-ui/index.html)).
 [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)
### Consumo de API Externa

Se ha implementado la conexión a fuentes de datos externas utilizando un repositorio de datos basado en APIs externas. En este proyecto, se ha consumido una API externa disponible en el siguiente enlace: [APIs externas](https://free-apis.github.io/#/browse).


### MVC (Modelo-Vista-Controlador):

**Descripción**: El patrón MVC separa una aplicación en tres componentes principales: el Modelo (que representa los datos y la lógica de negocio), la Vista (que es la interfaz de usuario) y el Controlador (que actúa como intermediario entre el Modelo y la Vista, gestionando las interacciones del usuario y actualizando el Modelo).

**Aplicación en el Proyecto**: En el proyecto que estamos desarrollando, hemos aplicado el patrón MVC en ambos lados de la aplicación:

- **Frontend (Angular)**: En el frontend desarrollado en Angular, hemos separado la lógica de presentación de los datos (Modelo) de la interfaz de usuario (Vista) y la lógica de control de las interacciones del usuario (Controlador). Los componentes de Angular actúan como controladores que interactúan con los servicios (Modelo) para obtener y manipular datos, y actualizan la interfaz de usuario (Vista) en consecuencia.

- **Backend (Spring Boot)**: En el backend desarrollado en Spring Boot, hemos utilizado el patrón MVC para gestionar las peticiones HTTP y manejar la lógica de negocio. Los controladores de Spring Boot actúan como el Controlador en el patrón MVC, recibiendo las peticiones HTTP, interactuando con los servicios (Modelo) para realizar operaciones en los datos y devolviendo las respuestas apropiadas.



### Inyección de Dependencias

La inyección de dependencias es un principio fundamental en el desarrollo de nuestro proyecto, tanto en el frontend desarrollado en Angular como en el backend desarrollado en Spring Boot. Este concepto nos permite gestionar las dependencias de manera eficiente y promover la modularidad y la reutilización del código en nuestra aplicación.

#### Angular

En el frontend, Angular utiliza la inyección de dependencias para proporcionar servicios a los componentes. Esto nos permite separar la lógica de negocio de la interfaz de usuario y facilita la creación de componentes independientes y reutilizables.

En nuestro proyecto Angular, podemos observar la inyección de dependencias en acción en varios lugares:
- Los servicios que encapsulan la lógica de negocio se inyectan en los componentes que los necesitan.
- Utilizamos el decorador `@Injectable()` para marcar las clases que pueden ser inyectadas como dependencias.
- La inyección de dependencias se maneja de manera transparente por Angular, lo que nos permite centrarnos en la implementación de la funcionalidad sin preocuparnos por la creación o gestión de las dependencias.

#### Spring Boot

En el backend, Spring Boot también hace un uso extensivo de la inyección de dependencias para gestionar los componentes de la aplicación. Esto nos permite modularizar nuestro código y facilita la creación de servicios y controladores que son independientes y fáciles de probar.

Algunos aspectos destacados de la inyección de dependencias en nuestro proyecto Spring Boot son:
- Los componentes de la aplicación, como los servicios y los controladores, se gestionan como beans de Spring y se inyectan en las clases que los necesitan.
- Utilizamos la anotación `@Autowired` para marcar los puntos de inyección de dependencias en nuestras clases.
- La inyección de dependencias nos permite desacoplar las diferentes capas de la aplicación y facilita la escritura de pruebas unitarias, ya que podemos sustituir fácilmente las dependencias por objetos mock.

En resumen, la inyección de dependencias es una técnica poderosa que utilizamos en nuestro proyecto tanto en Angular como en Spring Boot para mejorar la modularidad, la reutilización del código y la facilidad de prueba de nuestra aplicación.


### Patrón Repositorio:

**Descripción**: El patrón Repositorio se utiliza para encapsular el acceso a los datos y proporcionar una interfaz uniforme para interactuar con el almacenamiento de datos, ya sea una base de datos, una API externa, etc.

**Aplicación en el Proyecto**: En el backend de Spring Boot, hemos utilizado el patrón Repositorio para separar la lógica de acceso a datos del resto de la aplicación. Esto se logra encapsulando el acceso a la base de datos o a otras fuentes de datos en clases de repositorio, que proporcionan una interfaz uniforme para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos. Esta separación de preocupaciones mejora la testabilidad de la aplicación y facilita la sustitución de la capa de persistencia en el futuro.



#### Manejo de Errores

El proyecto implementa el manejo de errores en el frontend y el backend. A continuación se describen algunas de las estrategias utilizadas:

- **Backend (Spring Boot):** Se utiliza un controlador global de errores para manejar excepciones no controladas y errores de manera centralizada. Esto permite devolver respuestas HTTP adecuadas junto con mensajes de error significativos.

- **Frontend (Angular):** Se implementa el manejo de errores en los servicios y componentes mediante el uso de operadores `catchError` en las peticiones HTTP. Además, se muestran mensajes de error al usuario para informar sobre posibles problemas de conexión o errores en la aplicación.

---

# AppClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

#### Licencia

Este proyecto se distribuye bajo la Licencia MIT.

Los términos y condiciones de la Licencia MIT son los siguientes:

Copyright (c)

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para tratar el Software sin restricción, incluidos, entre otros, los derechos de uso, copia, modificación, fusión, publicación, distribución, sublicencia y/o venta de copias del Software, y para permitir a las personas a quienes se les proporcione el Software hacerlo, sujeto a las siguientes condiciones:

El aviso de copyright arriba y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE CUALQUIER RECLAMO, DAÑO O OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO MODO, QUE SURJA DE, FUERA O EN RELACIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.

#### Contacto

Si tienes preguntas, problemas o comentarios sobre el proyecto, no dudes en ponerte en contacto conmigo:

- Nombre: Héctor Cano Leal
- Ocupación: Analista Programador
- Correo electrónico: hectorcanolealestudios@gmail.com
- GitHub: [HectorCano1411](https://github.com/HectorCano1411)
