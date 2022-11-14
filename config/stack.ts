import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  python,

  // Frontend
  vue,
  vue2,
  nuxtjs,
  react,
  nextjs,

  // Backend
  node,
  fastAPI,

  // Cloud

  // Messaging

  // Databases
  postgres,
  mongo,
  typeORM,


  // Tools
  docker,
  vercel,
  git,
  sass,
  elementUI,
  vuex,
  vueRouter,
  bootstrap,
  pugJS,
  vuetify,
  tailwind,
  heroku,
}

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.vue]: {
    value: 'Vue',
    color: Colors.vue,
  },
  [Stack.vue2]: {
    value: 'Vue2',
    color: Colors.vue2,
  },
  [Stack.nuxtjs]: {
    value: 'NuxtJS',
    color: Colors.nuxtjs,
  },
  [Stack.nextjs]: {
    value: 'NextJS',
    color: Colors.nextjs,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.fastAPI]: {
    value: 'FastAPI',
    color: Colors.fastAPI,
  },
  [Stack.sass]: {
    value: 'Sass',
    color: Colors.sass,
  },
  [Stack.elementUI]: {
    value: 'ElementUI',
    color: Colors.elementUI,
  },
  [Stack.vuex]: {
    value: 'Vuex',
    color: Colors.vuex,
  },
  [Stack.vueRouter]: {
    value: 'Vue Router',
    color: Colors.vueRouter,
  },
  [Stack.bootstrap]: {
    value: 'Bootstrap',
    color: Colors.bootstrap,
  },
  [Stack.vercel]: {
    value: 'Vercel',
    color: Colors.vercel,
  },
  [Stack.pugJS]: {
    value: 'PugJS',
    color: Colors.pugJS,
  },
  [Stack.vuetify]: {
    value: 'Vuetify',
    color: Colors.vuetify,
  },
  [Stack.tailwind]: {
    value: 'Tailwind',
    color: Colors.tailwind,
  },
  [Stack.typeORM]: {
    value: 'TypeORM',
    color: Colors.typeORM,
  },
  [Stack.heroku]: {
    value: 'Heroku',
    color: Colors.heroku,
  },
};

export const WorkStack = [
  Stack.vue,
  Stack.react,
  Stack.nuxtjs,
  Stack.nextjs,
  Stack.typescript,
  Stack.node,
  Stack.python,
  Stack.fastAPI,
  Stack.javascript,
  Stack.postgres,
  Stack.mongo,
  Stack.git,
  Stack.docker,
  Stack.vercel
];