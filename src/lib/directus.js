import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());

await directus.auth.static(import.meta.env.DIRECTUS_TOKEN);

export default directus;

