import { createDirectus, rest, staticToken } from '@directus/sdk';

const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest()).with(staticToken(import.meta.env.DIRECTUS_TOKEN));

export default directus;