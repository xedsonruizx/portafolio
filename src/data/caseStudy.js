export const caseStudy = {
  project: 'Gestor de Alumnos',
  description:
    'Gestor de Alumnos es un sistema de gestión académica desarrollado como proyecto final del bootcamp. Permite administrar una ficha completa de estudiantes (11 campos: identificación, contacto, asistencia, promedio, estado), con autenticación de usuarios, control de acceso por roles y una capa de búsqueda tanto web como API REST.',
  challenge:
    'El desafío más grande de este proyecto fue aplicar todo lo aprendido durante el curso de manera conjunta sobre el modelo MVC: implementar seguridad, manejo de roles, vistas y validaciones, además del uso de una API, y no solo hacerlo funcionar sino también probarlo como un producto real. No se trataba de sumar funcionalidades por separado, sino de lograr que todas estas piezas trabajaran de forma coherente dentro de un mismo proyecto.',
  solution: [
    'Arquitectura por capas (controller → service → repository), separando la lógica MVC de la lógica REST.',
    'Anotación de validación personalizada (@Rut) con su propio ConstraintValidator, reutilizable en cualquier DTO o entidad.',
    'SecurityFilterChain con reglas explícitas por ruta: públicas, solo-ADMIN (crear/editar/eliminar) y ADMIN+USER (listar/ver/buscar).',
    'Dos manejadores de excepciones separados (GlobalExceptionHandler para las vistas, RestExceptionHandler para /api/**), cada uno devolviendo el formato correcto según el origen de la petición (página de error o JSON estructurado) para 400, 403, 404, 409 y 500.',
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
    'Cómo utilizar Eclipse junto al framework Spring, y qué beneficios reales aporta trabajar con un framework en vez de programar todo desde cero.',
    'Cómo implementar validaciones de datos, tanto de formato como de reglas de negocio propias.',
    'Cómo separar correctamente los roles y usuarios dentro de una aplicación.',
    'Cómo manejar los errores de forma ordenada en vez de dejar que la aplicación falle sin control.',
  ],
  metrics: [
    { value: '9', label: 'campos con validaciones propias (RUT, email, teléfono, fechas, rangos)' },
    { value: '6', label: 'endpoints REST expuestos en /api/estudiantes' },
    { value: '3', label: 'reglas de acceso distintas aplicadas sobre 2 roles (pública, solo ADMIN, ADMIN + USER)' },
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
    'Elegí Gestor de Alumnos porque es el proyecto que más se acerca a una aplicación completa y real: no es solo una interfaz visual ni un ejercicio aislado, sino un sistema full stack completo donde tuve que pensar en la seguridad, en cómo se relacionan los datos, en la experiencia de distintos tipos de usuario y en que todo funcionara de forma prolija y confiable. Es el que mejor refleja mi crecimiento durante el curso y mi forma de enfrentar un proyecto de principio a fin.',
};

export const caseStudy_en = {
  project: 'Student Manager',
  description:
    'Student Manager is an academic management system built as the bootcamp\'s final project. It manages a complete student profile (11 fields: identification, contact info, attendance, average grade, status), with user authentication, role-based access control, and a search layer available both through the web UI and a REST API.',
  challenge:
    'The biggest challenge of this project was applying everything I had learned during the course together on the MVC model: implementing security, role management, views and validations, plus the use of an API — and not just making it work, but also testing it like a real product. It wasn\'t about adding features separately, but about making all these pieces work coherently within the same project.',
  solution: [
    'Layered architecture (controller → service → repository), separating MVC logic from REST logic.',
    'A custom validation annotation (@Rut) with its own ConstraintValidator, reusable across any DTO or entity.',
    'A SecurityFilterChain with explicit rules per route: public routes, ADMIN-only routes (create/edit/delete), and ADMIN+USER routes (list/view/search).',
    'Two separate exception handlers (GlobalExceptionHandler for views, RestExceptionHandler for /api/**), each returning the correct format based on the request\'s origin (error page or structured JSON) for 400, 403, 404, 409, and 500.',
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
    'How to use Eclipse together with the Spring framework, and the real benefits of working with a framework instead of building everything from scratch.',
    'How to implement data validations, both format-based and custom business-rule based.',
    'How to properly separate roles and users within an application.',
    'How to handle errors in an organized way instead of letting the application fail without control.',
  ],
  metrics: [
    { value: '9', label: 'fields with custom validation (RUT, email, phone, dates, ranges)' },
    { value: '6', label: 'REST endpoints exposed under /api/estudiantes' },
    { value: '3', label: 'distinct access rules applied across 2 roles (public, ADMIN-only, ADMIN + USER)' },
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
    'I chose Student Manager because it\'s the project that comes closest to a complete, real-world application: it\'s not just a visual interface or an isolated exercise, but a complete full stack system where I had to think about security, how the data connects, the experience of different types of users, and making sure everything worked in a solid and reliable way. It\'s the one that best reflects my growth throughout the course and how I approach a project from start to finish.',
};
