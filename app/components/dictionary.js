var walmartVoice = {
    "config": {
        "options": {
            "mexico": "es-MX",
            "lang": "es-MX",
            "active": true,
        }
    },
    "trigger": [{
            "word": "tengo",
            "type": "evento"
        },
        {
            "word": "es",
            "type": "seleccion"
        },
        {
            "word": "recoger|servicio",
            "type": "envio"
        },
        {
            "word": "código|codigo",
            "type": "codigopostal"
        },
        {
            "word": "comprar|aceptar|acepto",
            "type": "aceptacion"
        },
        {
            "word": "tienda",
            "type": "store"
        },
        {
            "word": "buscar|busca|encuentra|quiero|dame|necesito",
            "type": "search"
        },
        {
            "word": "ir|ve|ver|redirige|colocate|cambia|regresar|cómo|recuperar",
            "type": "redirect",
            "response": [{
                    "word": "inicio|home|principio|comienza|comienzo",
                    "url": "/inicio",
                    "section": "home"
                }, {
                    "word": "accesorios de moda|accesorios|moda|moda para la vida|moda actual|accesorios de belleza",
                    "url": "/accesorios-de-moda",
                    "section": "category"
                },
                {
                    "word": "audio|sonido|Bocinas|audio para casa|audio premium|audífonos|audio para auto",
                    "url": "/audio",
                    "section": "category"
                },
                {
                    "word": "llantas|accesorios para auto|autos|autos y llantas",
                    "url": "/autos-y-llantas",
                    "section": "category"
                }, {
                    "word": "bebes|Bebés|Niños|Niños pequeños|",
                    "url": "/bebes",
                    "section": "category"
                },
                {
                    "word": "belleza|cuidado personal|belleza y cuidado personal",
                    "url": "/belleza-y-cuidado-personal",
                    "section": "category"
                },
                {
                    "word": "celulares|smartphones|mobiles|móviles|telefonos personal|telefonos personales",
                    "url": "/celulares",
                    "section": "category"
                },
                {
                    "word": "cocina|hogar|cocina y hogar|accesorios de cocina|",
                    "url": "/cocina-y-hogar",
                    "section": "category"
                },
                {
                    "word": "colchones|colchones y blancos|blancos|ropa de cama|accesorios para cama",
                    "url": "/colchones-y-blancos",
                    "section": "category"
                },
                {
                    "word": "computadoras|equipos de computo|laptops|portátiles|",
                    "url": "/computadoras",
                    "section": "category"
                },
                {
                    "word": "accesorios deportivos|desportes|Camping|Motos|Fitness|accesorios de deporte",
                    "url": "/deportes",
                    "section": "category"
                },
                {
                    "word": "electrodomésticos|refrigeradores|lavadoras|estufas|hornos|licuadoras",
                    "url": "/electrodomesticos",
                    "section": "category"
                },
                {
                    "word": "herramientas|ferretería|accesorios de trabajo",
                    "url": "/ferreteria",
                    "section": "category"
                },
                {
                    "word": "fotografías|cámaras|cámaras fotograficas",
                    "url": "/fotografia",
                    "section": "category"
                },
                {
                    "word": "Instrumentos|instrumentos musicales|instrumentos de musica|baterias|guitarras",
                    "url": "/instrumentos-musicales",
                    "section": "category"
                },
                {
                    "word": "juguetes|juguetes para niños|juguetes para niño|juguetes para niña|juguetes para niñas",
                    "url": "/juguetes",
                    "section": "category"
                },
                {
                    "word": "Libros|Libros de texto|",
                    "url": "/libros",
                    "section": "category"
                },
                {
                    "word": "refrigeradores|lavadoras|estufas|hornos|licuadoras",
                    "url": "/linea-blanca",
                    "section": "category"
                },
                {
                    "word": "perros|gatos|mascotas|animalitos|animales|comida para perro|comida para gato|",
                    "url": "/mascotas",
                    "section": "category"
                },
                {
                    "word": "muebles",
                    "url": "/muebles",
                    "section": "category"
                },
                {
                    "word": "oficina|papelería|oficina y papelería|accesorios de papel|pegamento",
                    "url": "/oficina-y-papeleria",
                    "section": "category"
                }, {
                    "word": "patio|patio y jardín|jardín|espacios abiertos|espacio abierto|accesorios de jardín",
                    "url": "/patio-y-jardin",
                    "section": "category"
                },
                {
                    "word": "películas|DVD|blu ray|bluray|discos",
                    "url": "/peliculas",
                    "section": "category"
                },
                {
                    "word": "TV|televisores|televisiones|pantallas|pantalla plana| smart TV| pantalla curva",
                    "url": "/tv-y-video",
                    "section": "category"
                },
                {
                    "word": "xbox one|play station|play station 4|videojuegos|nintendo|xbox 360|accesorios de videojuegos",
                    "url": "/videojuegos",
                    "section": "category"
                },
                {
                    "word": "xbox one|play station|play station 4|videojuegos|nintendo|xbox 360|accesorios de videojuegos",
                    "url": "/videojuegos",
                    "section": "category"
                },
                {
                    "word": "centro de ayuda|ayuda",
                    "url": "/centro-de-ayuda",
                    "section": "helpCenter"
                },
                {
                    "word": "preguntas frecuentes",
                    "url": "/centro-de-ayuda/preguntas-frecuentes/preguntas-frecuentes",
                    "section": "help center"
                },
                {
                    "word": "términos y condiciones|términos de uso",
                    "url": "/centro-de-ayuda/seguridad-y-privacidad/terminos-de-uso",
                    "section": "help center"
                },
                {
                    "word": "mis ordenes|mis pedidos|historial de pedidos|historial de ordenes|rastrear mis pedidos",
                    "url": "/mi-cuenta/mis-pedidos",
                    "section": "mi cuenta"
                },
                {
                    "word": "como comprar|",
                    "url": "/centro-de-ayuda/tus-pedidos/como-comprar",
                    "section": "help center"
                },
                {
                    "word": "comprar como invitado|",
                    "url": "/centro-de-ayuda/tus-pedidos/comprar-como-invitado",
                    "section": "help center"
                },
                {
                    "word": "crear mi cuenta|registro|como crear cuenta|como crear mi cuenta",
                    "url": "/registro",
                    "section": "mi cuenta"
                },
                {
                    "word": "login|ingresar|ingresar a cuenta",
                    "url": "/ingresar",
                    "section": "mi cuenta"
                },
                {
                    "word": "mi contraseña|contraseña|recuperar contraseña|recuperación de contraseña",
                    "url": "/recuperar-contrasena",
                    "section": "mi cuenta"
                },
                {
                    "word": "revisar carrito de compras|revisar carrito|carrito de compras",
                    "url": "/revisar-carrito",
                    "section": "carrito"
                },
                {
                    "word": "comprar",
                    "url": "/checkout",
                    "section": "checkout"
                }

            ]
        },
        {
            "word": "Hola|Hello|Hi|Como estas",
            "type": "Saludo",
            "response": [{
                "name": "Siri",
                "sentence": "¡Hola!, pero yo no soy Siri, soy Sam"
            }, {
                "name": "carito",
                "sentence": "¡Que tal!, Soy Carrito. ... ¿En que te puedo ayudar?"
            }, {
                "name": "Cortana",
                "sentence": "¡Hola!, Aun que estuvieramos en Windows no me gustaria ser ella"
            }, {
                "name": "Jarvis",
                "sentence": "¡Hola!, ¿Señor Stark?"
            }]
        },
        {
            "word": "dime|explicame|",
            "type": "explain",
            response: [{
                    "word": "como puedo comprar",
                    "text": "Mira lo que encontré en internet sobre Comó comprar en Walmart.com.mx"
                },
                {
                    "word": "me puedo registrar|me registro",
                    "text": "Mira primero entra a la página de walmart y ve a la seccion de registro"
                }
            ]
        },
        {
            "word": "desactivate|apagate",
            "type": "deactivate"
        }, ,
        {
            "word": "enciedete|actívate",
            "type": "activate"
        }

    ]
};