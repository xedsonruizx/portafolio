export const projects = [
  {
    title: 'Gestor de Alumnos',
    description: 'Sistema web de gestión académica desarrollado con Spring Boot. Permite administrar alumnos con ficha completa, autenticación de usuarios y control de acceso por roles.',
    tags: ['Spring Boot', 'Java 21', 'Spring Security', 'Thymeleaf', 'MySQL', 'JPA/Hibernate'],
    image: '/assets/images/proyects/java/Education/edu home.png',
    images: [
      '/assets/images/proyects/java/Education/edu home.png',
      '/assets/images/proyects/java/Education/edu admin.png',
      '/assets/images/proyects/java/Education/edu show.png',
      '/assets/images/proyects/java/Education/edu edit.png',
    ],
    features: [
      'Dashboard con listado y búsqueda de alumnos',
      'CRUD de alumnos con validación de datos',
      'Autenticación con registro y contraseñas cifradas (BCrypt)',
      'Control de acceso por roles (ADMIN / USER)',
    ],
    priority: 6
  },
  {
    title: 'Biblioteca Digital',
    description: 'Aplicación web Java EE para la gestión de un catálogo de libros. Permite registrar, editar y controlar la disponibilidad del material bibliográfico, con acceso diferenciado por tipo de usuario.',
    tags: ['Java', 'Jakarta Servlets', 'JSP', 'JSTL', 'MySQL', 'Tomcat'],
    image: '/assets/images/proyects/java/Biblioteca/biblio home.png',
    images: [
      '/assets/images/proyects/java/Biblioteca/biblio home.png',
      '/assets/images/proyects/java/Biblioteca/biblio index.png',
      '/assets/images/proyects/java/Biblioteca/biblio add.png',
      '/assets/images/proyects/java/Biblioteca/biblio edit.png',
    ],
    features: [
      'CRUD completo de libros (título, autor, ISBN, disponibilidad)',
      'Inicio de sesión con roles ADMIN / USER',
      'Filtro de acceso a funciones según permisos',
      'Persistencia en base de datos relacional',
    ],
    priority: 5
  },
  {
    title: 'Alke Wallet',
    description: 'Aplicación web de billetera digital construida como SPA sin backend. Simula el flujo completo de una fintech: autenticación, depósitos, transferencias y gestión de contactos.',
    tags: ['JavaScript (ES6+)', 'Bootstrap 5', 'jQuery', 'HTML5/CSS3', 'localStorage'],
    image: '/assets/images/proyects/java/Wallet/home.png',
    images: [
      '/assets/images/proyects/java/Wallet/home.png',
      '/assets/images/proyects/java/Wallet/login.png',
      '/assets/images/proyects/java/Wallet/register.png',
      '/assets/images/proyects/java/Wallet/send.png',
    ],
    features: [
      'Autenticación con registro e inicio de sesión',
      'Dashboard con saldo en tiempo real y últimos movimientos',
      'Depósitos y envío de dinero entre contactos',
      'Historial de transacciones con filtros y CRUD de contactos',
    ],
    priority: 4
  },
  {
    title: 'Asesorias - en desarrollo',
    description: 'Proyecto en desarrollo. Aplicación web para gestionar asesorías, administracion de usuarios, roles de usuario, formularios dinamicos, biblioteca, preguntas frecuentes y posts.',
    tags: ['Vue js', 'Php', 'Laravel'],
    image: '/assets/images/proyects/vuesjs/asesorias yg.png',
    repo: 'https://github.com/xedsonruizx/Asesoria-YG/tree/Inicio-de-proyecto-laravel',
    priority: 1
  },
  {
    title: 'GesInVet — Web',
    description: 'Sistema web de gestión veterinaria. Permite administrar fichas de pacientes, atenciones médicas, inventario de productos y un dashboard con métricas clave.',
    tags: ['Next.js 15+', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    image: '/assets/images/proyects/GesInVet/web/dashboard.png',
    images: [
      '/assets/images/proyects/GesInVet/web/dashboard.png',
      '/assets/images/proyects/GesInVet/web/atenciones.png',
      '/assets/images/proyects/GesInVet/web/detalle atencion.png',
      '/assets/images/proyects/GesInVet/web/productos.png',
      '/assets/images/proyects/GesInVet/web/Screenshot_1.png',
    ],
    features: [
      'Dashboard con métricas y resumen de actividad',
      'Módulo de atenciones y detalle clínico',
      'Gestión de inventario y productos',
      'Listado y búsqueda de pacientes',
    ],
    priority: 8
  },
  {
    title: 'GesInVet — Mobile',
    description: 'Versión móvil del sistema veterinario GesInVet. Diseñada para consultas rápidas en terreno: pacientes, inventario, consultas e información del sistema.',
    tags: ['React Native', 'Expo', 'TypeScript', 'API', 'Android', 'iOS'],
    image: '/assets/images/proyects/GesInVet/mobile/dashboard_mov.png',
    images: [
      '/assets/images/proyects/GesInVet/mobile/dashboard_mov.png',
      '/assets/images/proyects/GesInVet/mobile/pacientes_mov.png',
      '/assets/images/proyects/GesInVet/mobile/consultas_mov.png',
      '/assets/images/proyects/GesInVet/mobile/Inventario_mov.png',
      '/assets/images/proyects/GesInVet/mobile/info.png',
    ],
    features: [
      'Dashboard móvil con vista de actividad',
      'Consultas y registro de pacientes',
      'Control de inventario desde el móvil',
      'Información y ajustes del sistema',
    ],
    priority: 7
  },
];
export const projects_en = [
  {
    title: 'Student Manager',
    description: 'Academic management web system built with Spring Boot. Manages students with full profiles, user authentication, and role-based access control.',
    tags: ['Spring Boot', 'Java 21', 'Spring Security', 'Thymeleaf', 'MySQL', 'JPA/Hibernate'],
    image: '/assets/images/proyects/java/Education/edu home.png',
    images: [
      '/assets/images/proyects/java/Education/edu home.png',
      '/assets/images/proyects/java/Education/edu admin.png',
      '/assets/images/proyects/java/Education/edu show.png',
      '/assets/images/proyects/java/Education/edu edit.png',
    ],
    features: [
      'Dashboard with student listing and search',
      'Student CRUD with data validation',
      'Authentication with registration and encrypted passwords (BCrypt)',
      'Role-based access control (ADMIN / USER)',
    ],
    priority: 6
  },
  {
    title: 'Digital Library',
    description: 'Java EE web application for managing a book catalog. Register, edit, and control the availability of library materials, with access differentiated by user type.',
    tags: ['Java', 'Jakarta Servlets', 'JSP', 'JSTL', 'MySQL', 'Tomcat'],
    image: '/assets/images/proyects/java/Biblioteca/biblio home.png',
    images: [
      '/assets/images/proyects/java/Biblioteca/biblio home.png',
      '/assets/images/proyects/java/Biblioteca/biblio index.png',
      '/assets/images/proyects/java/Biblioteca/biblio add.png',
      '/assets/images/proyects/java/Biblioteca/biblio edit.png',
    ],
    features: [
      'Full book CRUD (title, author, ISBN, availability)',
      'Login with ADMIN / USER roles',
      'Access filtering based on permissions',
      'Persistence in a relational database',
    ],
    priority: 5
  },
  {
    title: 'Alke Wallet',
    description: 'Digital wallet web application built as a backend-free SPA. Simulates a complete fintech flow: authentication, deposits, transfers, and contact management.',
    tags: ['JavaScript (ES6+)', 'Bootstrap 5', 'jQuery', 'HTML5/CSS3', 'localStorage'],
    image: '/assets/images/proyects/java/Wallet/home.png',
    images: [
      '/assets/images/proyects/java/Wallet/home.png',
      '/assets/images/proyects/java/Wallet/login.png',
      '/assets/images/proyects/java/Wallet/register.png',
      '/assets/images/proyects/java/Wallet/send.png',
    ],
    features: [
      'Authentication with registration and login',
      'Dashboard with real-time balance and recent transactions',
      'Deposits and money transfers between contacts',
      'Transaction history with filters and contact CRUD',
    ],
    priority: 4
  },
  {
    title: 'Asesorias - in development',
    description: 'Project in development. Web application to manage consultations, user administration, user roles, dynamic forms, library, FAQs, and posts.',
    tags: ['Vue.js', 'PHP', 'Laravel'],
    image: '/assets/images/proyects/vuesjs/asesorias yg.png',
    repo: 'https://github.com/xedsonruizx/Asesoria-YG/tree/Inicio-de-proyecto-laravel',
    priority: 1
  },
  {
    title: 'GesInVet — Web',
    description: 'Web-based veterinary management system. Manage patient records, medical appointments, product inventory, and a dashboard with key metrics.',
    tags: ['Next.js 15+', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    image: '/assets/images/proyects/GesInVet/web/dashboard.png',
    images: [
      '/assets/images/proyects/GesInVet/web/dashboard.png',
      '/assets/images/proyects/GesInVet/web/atenciones.png',
      '/assets/images/proyects/GesInVet/web/detalle atencion.png',
      '/assets/images/proyects/GesInVet/web/productos.png',
      '/assets/images/proyects/GesInVet/web/Screenshot_1.png',
    ],
    features: [
      'Dashboard with metrics and activity summary',
      'Medical appointments and clinical detail module',
      'Product inventory management',
      'Patient search and listing',
    ],
    priority: 8
  },
  {
    title: 'GesInVet — Mobile',
    description: 'Mobile version of the GesInVet veterinary system. Designed for quick field access: patients, inventory, consultations, and system information.',
    tags: ['React Native', 'Expo', 'TypeScript', 'API', 'Android', 'iOS'],
    image: '/assets/images/proyects/GesInVet/mobile/dashboard_mov.png',
    images: [
      '/assets/images/proyects/GesInVet/mobile/dashboard_mov.png',
      '/assets/images/proyects/GesInVet/mobile/pacientes_mov.png',
      '/assets/images/proyects/GesInVet/mobile/consultas_mov.png',
      '/assets/images/proyects/GesInVet/mobile/Inventario_mov.png',
      '/assets/images/proyects/GesInVet/mobile/info.png',
    ],
    features: [
      'Mobile dashboard with activity overview',
      'Patient consultations and records',
      'Inventory control on the go',
      'System information and settings',
    ],
    priority: 7
  },
];
