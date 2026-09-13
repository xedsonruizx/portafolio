export const caseStudy = {
  project: 'SpringEduManager',
  description:
    'SpringEduManager es un sistema de gestión académica desarrollado como proyecto final del bootcamp. Permite administrar una ficha completa de estudiantes (10+ campos: identificación, contacto, asistencia, promedio, estado), con autenticación de usuarios, control de acceso por roles y una capa de búsqueda tanto web como API REST.',
  challenge:
    'El reto no fue escribir un CRUD más — fue integrar correctamente tres capas que normalmente se aprenden por separado: seguridad (Spring Security con roles), persistencia (JPA/Hibernate con validaciones a nivel de dominio) y una doble interfaz (vistas Thymeleaf + endpoints REST) que debían comportarse de forma coherente pero con reglas de error distintas. Un ejemplo concreto: había que validar el RUT chileno (con su dígito verificador) como una regla de negocio real, no como un campo de texto libre, y decidir qué pasaba cuando un usuario sin permisos intentaba editar un estudiante (403) o consultaba uno inexistente (404) — y que la respuesta fuera distinta si venía del formulario web o de la API.',
  solution: [
    'Arquitectura por capas (controller → service → repository), separando la lógica MVC de la lógica REST.',
    'Anotación de validación personalizada (@Rut) con su propio ConstraintValidator, reutilizable en cualquier DTO o entidad.',
    'SecurityFilterChain con reglas explícitas por ruta: públicas, solo-ADMIN (crear/editar/eliminar) y ADMIN+USER (listar/ver/buscar).',
    'Dos manejadores de excepciones separados (GlobalExceptionHandler para las vistas, RestExceptionHandler para /api/**), cada uno devolviendo el formato correcto (página de error vs. JSON estructurado) para 400, 403, 404, 409 y 500.',
    'Dos vías de búsqueda: texto libre (nombre, RUT, email) y filtrado por estado (activo/inactivo).',
  ],
  tools: [
    'Spring Boot 4 (Java 21)',
    'Spring Data JPA + Hibernate',
    'Spring Security (formLogin + BCrypt)',
    'Thymeleaf',
    'Bean Validation (Jakarta) con validador custom',
    'MySQL',
    'Maven',
  ],
  learnings: [
    'Cómo separar responsabilidades entre una capa MVC tradicional y una API REST dentro del mismo proyecto sin que se pisen las reglas de seguridad ni de manejo de errores.',
    'Cómo escribir un validador de Bean Validation propio en lugar de depender solo de anotaciones estándar (@NotNull, @Size).',
    'Cómo diseñar reglas de autorización graduales (hasRole vs hasAnyRole) pensando en el caso de uso real, no solo en "logueado sí/no".',
    'La importancia de manejar DataIntegrityViolationException explícitamente para dar un mensaje útil ante datos duplicados (RUT/email), en vez de dejar pasar un error 500 genérico.',
  ],
  metrics: [
    { value: '5', label: 'códigos de error HTTP manejados explícitamente (400, 403, 404, 409, 500)' },
    { value: '2', label: 'vías de búsqueda funcionales (texto libre + filtro por estado)' },
    { value: '10', label: 'usuarios de ejemplo cargados automáticamente al arrancar (DataLoader)' },
    { value: '0', label: 'contraseñas en texto plano — todo cifrado con BCrypt' },
    { value: '<5s', label: 'arranque de la app y conexión a base de datos en entorno local' },
  ],
  skills: [
    'Java 21',
    'Spring Boot / Spring MVC',
    'Spring Security',
    'Spring Data JPA',
    'Diseño de API REST',
    'Validación de datos personalizada',
    'Manejo de excepciones centralizado',
    'Modelado de base de datos relacional',
    'Control de acceso basado en roles (RBAC)',
    'Thymeleaf',
    'Maven',
  ],
  justification:
    'Elegí SpringEduManager porque, a diferencia de los otros proyectos del portafolio (un frontend estático y una app Java EE más simple), este es el que más se acerca a un sistema backend "de verdad": combina autenticación, autorización, persistencia, validación de negocio y una API consumible externamente, todo en un mismo proyecto. Es el que mejor demuestra mi capacidad de estructurar una aplicación en capas y tomar decisiones de diseño — no solo hacer que funcione, sino que falle de forma controlada y sea mantenible.',
};

export const caseStudy_en = {
  project: 'SpringEduManager',
  description:
    'SpringEduManager is an academic management system built as the bootcamp\'s final project. It manages a complete student profile (10+ fields: identification, contact info, attendance, average grade, status), with user authentication, role-based access control, and a search layer available both through the web UI and a REST API.',
  challenge:
    'The challenge wasn\'t writing yet another CRUD — it was correctly integrating three layers that are normally learned separately: security (Spring Security with roles), persistence (JPA/Hibernate with domain-level validation), and a dual interface (Thymeleaf views + REST endpoints) that had to behave consistently while following different error rules. A concrete example: the Chilean RUT (with its check digit) had to be validated as a real business rule, not a free-text field, and I had to decide what happens when a user without permissions tries to edit a student (403) or looks up one that doesn\'t exist (404) — with the response shape differing depending on whether the request came from the web form or the API.',
  solution: [
    'Layered architecture (controller → service → repository), separating MVC logic from REST logic.',
    'A custom validation annotation (@Rut) with its own ConstraintValidator, reusable across any DTO or entity.',
    'A SecurityFilterChain with explicit rules per route: public routes, ADMIN-only routes (create/edit/delete), and ADMIN+USER routes (list/view/search).',
    'Two separate exception handlers (GlobalExceptionHandler for views, RestExceptionHandler for /api/**), each returning the correct format (error page vs. structured JSON) for 400, 403, 404, 409, and 500.',
    'Two search paths: free-text search (name, RUT, email) and status filtering (active/inactive).',
  ],
  tools: [
    'Spring Boot 4 (Java 21)',
    'Spring Data JPA + Hibernate',
    'Spring Security (formLogin + BCrypt)',
    'Thymeleaf',
    'Bean Validation (Jakarta) with a custom validator',
    'MySQL',
    'Maven',
  ],
  learnings: [
    'How to separate responsibilities between a traditional MVC layer and a REST API within the same project without security or error-handling rules stepping on each other.',
    'How to write a custom Bean Validation validator instead of relying only on standard annotations (@NotNull, @Size).',
    'How to design graduated authorization rules (hasRole vs. hasAnyRole) based on the real use case, not just "logged in yes/no".',
    'The importance of explicitly handling DataIntegrityViolationException to return a useful message on duplicate data (RUT/email), instead of letting a generic 500 error through.',
  ],
  metrics: [
    { value: '5', label: 'HTTP error codes handled explicitly (400, 403, 404, 409, 500)' },
    { value: '2', label: 'functional search paths (free text + status filter)' },
    { value: '10', label: 'sample users auto-loaded at startup (DataLoader)' },
    { value: '0', label: 'plaintext passwords — everything encrypted with BCrypt' },
    { value: '<5s', label: 'app startup and database connection time locally' },
  ],
  skills: [
    'Java 21',
    'Spring Boot / Spring MVC',
    'Spring Security',
    'Spring Data JPA',
    'REST API design',
    'Custom data validation',
    'Centralized exception handling',
    'Relational database modeling',
    'Role-based access control (RBAC)',
    'Thymeleaf',
    'Maven',
  ],
  justification:
    'I chose SpringEduManager because, unlike the other projects in my portfolio (a static frontend and a simpler Java EE app), this one comes closest to a "real" backend system: it combines authentication, authorization, persistence, business validation, and an externally consumable API, all in a single project. It\'s the one that best demonstrates my ability to structure a layered application and make real design decisions — not just making it work, but making it fail in a controlled, maintainable way.',
};
