### Escuela Colombiana de Ingeniería
### Arquiecturas de Software
## Integrantes:
### Juan David Martínez Mendez
### Santiago Gualdrón Rincón

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

<img width="1602" height="600" alt="image" src="https://github.com/user-attachments/assets/8548d544-0f3d-4a04-9f6f-0566f355d49b" />

<img width="868" height="663" alt="image" src="https://github.com/user-attachments/assets/e4fd3e6a-3f67-468c-ac0f-e198d822290e" />

<img width="876" height="572" alt="image" src="https://github.com/user-attachments/assets/501bf508-6425-44a0-905f-6774f29518cf" />

<img width="1122" height="788" alt="image" src="https://github.com/user-attachments/assets/67ed5237-cc79-4b31-85a7-f2b848c2457a" />

<img width="1594" height="601" alt="image" src="https://github.com/user-attachments/assets/03614f8c-5c24-48f7-bf16-28b0283353df" />

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

<img width="1451" height="616" alt="image" src="https://github.com/user-attachments/assets/daf96c3d-ccbf-48a5-b491-a888d260b556" />

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

<img width="1136" height="742" alt="image" src="https://github.com/user-attachments/assets/66ba0828-63ab-4be4-bac6-1ee4e0de6891" />

<img width="1593" height="838" alt="image" src="https://github.com/user-attachments/assets/15894a9c-e0c4-4eec-9df8-fbc11238b37d" />

4. Dirijase al portal de Azure y pruebe la function.

<img width="1599" height="637" alt="image" src="https://github.com/user-attachments/assets/da51648c-8da8-40ab-9956-09022dbd7e99" />

<img width="1597" height="795" alt="image" src="https://github.com/user-attachments/assets/4c576bb1-663d-4d72-a9c5-d10fce71b1d2" />

<img width="1598" height="801" alt="image" src="https://github.com/user-attachments/assets/bf8eba80-426b-42a8-82a7-b9dc1daed290" />

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

<img width="1141" height="550" alt="image" src="https://github.com/user-attachments/assets/68fce0bc-ec75-4987-ae24-6764e073f7d4" />

<img width="1354" height="531" alt="image" src="https://github.com/user-attachments/assets/b26e216b-8495-4b8b-a28f-1962e49f7a0d" />

#### Pruebas Postman en newman:
codigo para correr 10 veces las pruebas en paralelo:
  ```sh
   for i in {1..10}; do
      newman run Fibonacci.postman_collection.json \
        -e Fibonacci.postman_environment.json \
        -n 10 &
    done
    wait
```
tablas:

<img width="978" height="677" alt="image" src="https://github.com/user-attachments/assets/37242b31-4c53-41a6-b662-46b14effc04b" />

<img width="731" height="717" alt="image" src="https://github.com/user-attachments/assets/ef041ae8-a9bf-4583-b1a7-06ac7c596340" />

<img width="885" height="744" alt="image" src="https://github.com/user-attachments/assets/b2ee6ed1-f070-4916-8062-93f3d6a72b03" />

<img width="741" height="679" alt="image" src="https://github.com/user-attachments/assets/6289bb3b-c0f4-46f6-9349-81de3032e163" />

<img width="854" height="738" alt="image" src="https://github.com/user-attachments/assets/31dda79d-1b47-47a0-bfd8-691fa2efde41" />

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

Procedemos a modificar la función de fibonacci para implementar la recurrencia con memorización, tenemos la siguiente implementación

<img width="1329" height="915" alt="image" src="https://github.com/user-attachments/assets/74008025-23fb-4957-9eb6-a75b4868aa09" />

Luego procedemos a realizar los mismos pasos anteriores de la guía, desplegando el proyecto a Azure Functions, este es el log resultante

<img width="568" height="299" alt="image" src="https://github.com/user-attachments/assets/62142b38-9406-4d26-9175-7a37fb75c171" />

<img width="613" height="116" alt="image" src="https://github.com/user-attachments/assets/8518d51c-ddab-4806-bd78-9c0aa999e954" />

Procedemos a probar desde Azure que la función responde correctamente

Input:

<img width="1875" height="966" alt="image" src="https://github.com/user-attachments/assets/966b068f-87c5-454c-8e4e-791b070862b7" />

Output:

<img width="1876" height="965" alt="image" src="https://github.com/user-attachments/assets/64f54b4d-7ed0-4054-9765-e641d5251c60" />

Ahora vamos a demostrar el comportamiento después de 5 minutos de inactividad, esto lo realizaremos por medio de PowerShell para medir el tiempo de respuesta de la Azure Function, lo realizamos de la siguiente manera

Realizamos 3 llamados seguidos a la aplicación

<img width="928" height="764" alt="image" src="https://github.com/user-attachments/assets/8dcb7c7d-590e-48e0-954c-62261138cb5d" />

Esperamos 5 minutos y realizamos el mismo llamado

<img width="758" height="271" alt="image" src="https://github.com/user-attachments/assets/34f65e24-c035-44e0-bd4c-5cef7e28f792" />

Como podemos evidenciar en los resultados, al realizar el llamado después de los 5 minutos el tiempo en milisegundos ha aumentado considerablemente, este comportamiento se conoce como "cold start" que ocurre cuando la función lleva tiempo sin ser usada, por lo que Azure para ahorrar recursos descarga la instancia, luego cuando se vuelve a realizar el llamado, azure debe asignar un contenedor inicializar el runtime Node.js, montar el function app, cargar dependencias y ejecutar POR PRIMERA VEZ la función.

La función respondió al principio con tiempos considerablemente bajos, este comportamiento se conoce como "warm start" ya que al quedar la function app inicializada, no se necesita activar otro contenedor o cargar dependencias por lo que los llamados son más rápidos.

**Preguntas**

* ¿Qué es un Azure Function?

  Azure Functions es un servicio en la nube que permite ejecutar fragmentos de código sin necesidad de administrar servidores. Solo se desarrolla la función y Azure la ejecuta cuando se activa un evento o cuando alguien la invoca. La plataforma se encarga del escalado y de toda la infraestructura.

* ¿Qué es serverless?

  Serverless es un modelo donde no gestionas la infraestructura.
  Los servidores existen, pero están completamente abstraídos para el desarrollador. Esto implica que solo se enfoca en escribir el código, mientras que el Azure se ocupa de asignar recursos, escalar y cobrar únicamente por el tiempo de ejecución real.

* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?

  El runtime es el entorno de ejecución que Azure utiliza para correr tus funciones.
  Cuando se crea un Function App y eliges un runtime (.NET, Node.js, Python, Java, etc.), se está definiendo:
  - El lenguaje en el que vas a desarrollar
  - La versión del lenguaje soportada
  - Las dependencias y características disponibles
  - Cómo Azure va a ejecutar tu código internamente

* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?

  El Storage Account es obligatorio porque Azure Functions lo necesita para operar correctamente. Se utiliza para:
  - Guardar logs
  - Almacenar metadatos de los triggers
  - Mantener el estado interno del host
  - Coordinar el escalado en el plan de consumo
    
   Sin ese Storage Account, el Function App no puede iniciarse, ya que depende de esos archivos internos para funcionar.

* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
  Azure Functions tiene varios planes de hospedaje, cada uno ligado al rendimiento, costo y disponibilidad
  1. Plan de Consumo:
     * Características:
         * Modelo serverless: paga por ejecución.
         * Escala automáticamente según demanda.
         * Las instancias "duermen" cuando no hay tráfico (cold start).
    * Ventajas:
         * Costo bajo.
         * Escalabilidad automática SIN configuración de usuario.
         * Ideal para cargas irregulares o poco frecuentes.
    * Desventajas:
         * Puede presentar cold starts cuando la función no se usa por varios minutos.
         * Tiempo máximo de ejecución: 10 minutos por defecto (ampliable a 30).
         * Sin acceso completo a infraestructura dedicada.
  2. Plan Premium
    *  Características:
         * Escalado automático, pero con instancias precalentadas (no hay cold starts).
         * Instancias dedicadas con memoria y CPU superior.
         * Soporta funciones de larga duración.
    *  Ventajas:
         * Sin cold starts.
         * Mejor rendimiento.
         * Permite VNET, funciones más pesadas y ejecución por más tiempo.
         * Ideal para APIs con tráfico estable o crítico.
    *  Desventajas:
         * Más costoso, incluso si no hay tráfico.
         * Se paga por instancia reservada, no solo por ejecución.
  3. Plan Dedicado
    * Características:
         * Ejecuta Functions sobre máquinas del App Service siempre activas.
         * No es serverless: las instancias son totalmente dedicadas.
    * Ventajas:
         * No hay cold starts (instancia siempre encendida).
         * Control total sobre tamaño y número de máquinas.
         * Útil si ya se tiene un App Service Plan con capacidad sobrante.
    * Desventajas:
         * El más costoso de todos: se paga la máquina completa 24/7.
         * Escalado manual o semiautomático.
         * No está pensado para cargas irregulares.
* ¿Por qué la memoization falla o no funciona de forma correcta?
  La memorización falla porque  la function app no garantiza que la misma instancia ejecute todas las peticiones, ya que Azure fuctions
  1. Crea instancias efímeras: Cada ejecución puede ser atentidad por una instancia diferente.
  2. La instancia puede "dormirse" como mencionamos anteriormente
  3. El código no persiste entre ejecuciones
* ¿Cómo funciona el sistema de facturación de las Function App?
  La facturación depende del tipo de plan

  1. Plan de Consumo: Pagas por millon de ejecuciones, el primer millon por mes es gratis
  2. Plan Premium: Pagas por número de instancias reservadas, el tamaño de la maquina y el tiempo en que las instancias estan activas
  3. Plan Dedicado: Pagas por la maquina completa 24/7 independientemente si la función se ejecuta o no.
