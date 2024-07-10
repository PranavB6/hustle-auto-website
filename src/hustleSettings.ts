import { z } from 'zod';

const hustleSettingsSchema = z
  .object({
    COMPANY: z
      .object({
        NAME: z.string().min(1),
        URL: z.string().url(),
        DOMAIN: z.string().min(1),
        ADDRESS: z.string().min(1),
        PHONE_NUMBER: z.string().min(1),
        EMAIL: z.string().email(),
        CONTACT_FORM_URL: z.string().url(),
      })
      .strict(),
  })
  .strict();

type HustleSettings = z.infer<typeof hustleSettingsSchema>;

const getHustleSettings = (): HustleSettings => {
  return hustleSettingsSchema.parse({
    COMPANY: {
      NAME: 'Hustle Automotive',
      URL: 'https://hustleauto.com',
      DOMAIN: 'hustleauto.com',
      ADDRESS: '15 Skyview Ranch Blvd Calgary, Alberta T3N0H1 Canada',
      PHONE_NUMBER: '(587) 436 - 0142',
      EMAIL: 'hustleaservices@gmail.com',
      CONTACT_FORM_URL: 'https://hustleauto.com/contact-us',
    },
  });
};

export { getHustleSettings, type HustleSettings };
