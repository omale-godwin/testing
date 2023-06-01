import { Contact, ContactSchema } from './contact.schema';
import { YokaiAirdrop, YokaiAirdropSchema } from './yokaiAirdrop.schema';


export const schemas = [
  { name: Contact.name, schema: ContactSchema },
  { name: YokaiAirdrop.name, schema: YokaiAirdropSchema}
];
