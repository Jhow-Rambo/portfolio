export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  //TODO: Put the domain of the portifolio
  site: 'xxxx.com',
  links: {
    github: 'https://github.com/Jhow-Rambo',
    linkedin: 'https://www.linkedin.com/in/jhonatan-rambo-8374b81b2/?locale=en_US',
    email: 'mailto:jhonatan.ramboo@hotmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/jhonatanraD',
  },
};
