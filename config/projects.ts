import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
  gitHub?: string
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'PARA Resiliência',
    slug: 'pararesiliência',
    banner: '/static/projects/PARA-Resiliencia/banner.png',
    website: 'https://github.com/matheusgomes062/PARA-resiliencia',
    description:
      'Site for university research on the proper functioning of restaurants. We created a form with questions from the database, Google Forms style.',
    shortDescription:
      'Site for university research on the proper functioning of restaurants.',
    repository: 'https://github.com/matheusgomes062/PARA-resiliencia',
    stack: [
      Stack.vue2,
      Stack.sass,
      Stack.elementUI,
      Stack.vuex,
      Stack.vueRouter,
      Stack.bootstrap,
      Stack.pugJS,
      Stack.vercel,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/PARA-Resiliencia/banner.png',
      '/static/projects/PARA-Resiliencia/login.png',
      '/static/projects/PARA-Resiliencia/questionary.png',
      '/static/projects/PARA-Resiliencia/questionary1.png',
      '/static/projects/PARA-Resiliencia/questionary2.png',
    ],
    deployment: {
      web: 'https://app-resiliencia.vercel.app/',
      gitHub: 'https://github.com/matheusgomes062/PARA-resiliencia'
    },
    subProjects: [],
  },
  {
    title: 'Meter Dashboard',
    slug: 'meterDashboard',
    website: 'https://meter-dashboard.vercel.app/dashboard',
    banner: '/static/projects/meterDashboard/banner.png',
    description:
      'Dashboard constructed with the objective to be a proof-of-concept to a project where the main objective was to show images of the meter readings that an AI processed',
    shortDescription:
      'Dashboard constructed with the objective to show images of the meter readings that an AI processed',
    repository: 'https://meter-dashboard.vercel.app/dashboard',
    stack: [
      Stack.vue3,
      Stack.tailwind,
      Stack.vercel,
    ],
    dimensions: [460, 1000],
    screenshots: [
      '/static/projects/meterDashboard/banner.png',
      '/static/projects/meterDashboard/meter.png',
      '/static/projects/meterDashboard/meterData.png',
      '/static/projects/meterDashboard/addMeter.png',
    ],
    deployment: {
      web: 'https://meter-dashboard.vercel.app/dashboard',
      gitHub: 'https://github.com/Jhow-Rambo/meter-dashboard'
    },
    subProjects: [],
  },
  {
    title: 'Odona',
    slug: 'odona',
    banner: '/static/projects/odona/banner.png',
    website: 'https://www.odona.com.br/',
    description: `Odona is a career accelerator company focused on different niches of people belonging to underrepresented groups. Such as: black people, indigenous people, people who identify with the female gender, people with disabilities, people residing in peripheral regions and LGBTQIA+ people.`,
    shortDescription:
      'Odona is a career accelerator company focused on different niches of people belonging to underrepresented groups.',
    repository: null,
    stack: [
      Stack.nuxtjs,
      Stack.sass,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/odona/banner.png',
      '/static/projects/odona/home.png',
      '/static/projects/odona/login.png',
      '/static/projects/odona/values.png',
      '/static/projects/odona/charts.png',
      '/static/projects/odona/footer.png',
    ],
    deployment: {
      web: 'https://www.odona.com.br/',
    },
    subProjects: [],
  },
  {
    title: 'Fauna Inventory',
    slug: 'faunaInventory',
    website: 'https://itdi-front-end-aplication.vercel.app/dashboard',
    banner: '/static/projects/faunaInventory/banner.png',
    description:
      'Fauna Inventory is a proof of concept where a dashboard is built to visualize images captured by a camera from a totem. In addition to displaying metrics referring to animals identified by artificial intelligence.',
    shortDescription:
      'Fauna Inventory is a proof of concept where a dashboard is built to visualize images captured by a camera from a totem.',
    repository: 'https://github.com/Jhow-Rambo/itdi-frontEnd-aplication',
    stack: [
      Stack.vue2,
      Stack.vuex,
      Stack.vueRouter,
      Stack.sass,
      Stack.vuetify,
      Stack.vercel
    ],
    dimensions: [921, 1920],
    screenshots: [
      '/static/projects/faunaInventory/banner.png',
      '/static/projects/faunaInventory/home.png',
      '/static/projects/faunaInventory/detections.png',
      '/static/projects/faunaInventory/totens.png',
      '/static/projects/faunaInventory/createToten.png',
    ],
    deployment: {
      web: 'https://itdi-front-end-aplication.vercel.app/dashboard',
      gitHub: 'https://github.com/Jhow-Rambo/itdi-frontEnd-aplication/blob/main/src/router/index.js'
    },
    subProjects: [],
  },
  {
    title: 'Sharpy',
    slug: 'sharpy',
    website: '',
    banner: '/static/projects/sharpy/banner.png',
    description:
      'Sharpy is a software house that aims to build solutions to everyday problems. We create all company landing pages, solutions, application steps and much more.',
    shortDescription:
      'Sharpy is a software house that aims to build solutions to everyday problems.',
    repository: '',
    stack: [
      Stack.nextjs,
      Stack.tailwind
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/sharpy/banner.png',
      '/static/projects/sharpy/howWeAre.png',
      '/static/projects/sharpy/carrer.png',
      '/static/projects/sharpy/footer.png',
    ],
    deployment: {
      web: 'https://www.figma.com/proto/lVD8seuAhdZAjrkrwpoFyI/Sharpy?node-id=327%3A11739&scaling=scale-down&page-id=46%3A1380&starting-point-node-id=301%3A7151',
    },
    subProjects: [],
  },
  {
    title: 'Portfolio',
    slug: 'portfolio',
    website: '',
    banner: '/static/projects/portfolio/banner.png',
    description:
      'Portfolio built and modified using one of the best technologies on the market.',
    shortDescription:
      'Portfolio built and modified using one of the best technologies on the market.',
    repository: '',
    stack: [
      Stack.nextjs,
      Stack.tailwind,
      Stack.vercel
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/portfolio/banner.png',
      '/static/projects/portfolio/projects.png',
      '/static/projects/portfolio/about.png',
      '/static/projects/portfolio/contact.png',
    ],
    deployment: {
      web: '',
      gitHub: ''
    },
    subProjects: [],
  },
  {
    title: 'Fauna Inventory - API',
    slug: 'faunaInventoryAPI',
    website: '',
    banner: '/static/projects/faunaInventoryAPI/banner.svg',
    description:
      'Project aimed at building an API to meet the requirements of the Fauna Inventory project, during development it was sought to use good practices in the development of the API such as DDD, TDD and Clean Code.',
    shortDescription:
      'Project aimed at building an API to meet the requirements of the Fauna Inventory project.',
    repository: 'https://github.com/Jhow-Rambo/itdt-backend-node',
    stack: [
      Stack.typescript,
      Stack.node,
      Stack.typeORM,
      Stack.heroku
    ],
    dimensions: [921, 1920],
    screenshots: [

    ],
    deployment: {
      gitHub: 'https://github.com/Jhow-Rambo/itdt-backend-node'
    },
    subProjects: [],
  },
  {
    title: 'jobFY - API',
    slug: 'jobFYAPI',
    website: '',
    banner: '/static/projects/faunaInventoryAPI/banner.svg',
    description:
      'API under construction, with the purpose of helping people who are looking for a job, jobFY API seeks to group vacancies from other job search tools, bringing more options to choose in a single place. It is noteworthy that jobFY is an API that is being built with good development practices such as DDD, TDD and Clean Code.',
    shortDescription:
      'jobFY API seeks to group vacancies from other job search tools, bringing more options to choose in a single place.',
    repository: 'https://github.com/Jhow-Rambo/jobfyAPI',
    stack: [
      Stack.typescript,
      Stack.node,
      Stack.typeORM
    ],
    dimensions: [921, 1920],
    screenshots: [

    ],
    deployment: {
      gitHub: 'https://github.com/Jhow-Rambo/itdt-backend-node'
    },
    subProjects: [],
  },
];
