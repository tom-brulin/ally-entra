The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { EntraDriver, EntraConfig } from 'ally-entra/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    entra: {
      config: EntraConfig
      implementation: EntraDriver
    }
  }
}
```

Add new environment variables inside `env.ts`.

```ts
ENTRA_CLIENT_ID: Env.schema.string(), 
ENTRA_CLIENT_SECRET: Env.schema.string(),
ENTRA_TENANT_ID: Env.schema.string.optional(),
```

Configure the driver inside the `config/ally.ts` file as follows
```ts
const allyConfig: AllyConfig = {
  // ... other drivers
  /*
	|--------------------------------------------------------------------------
	| Entra driver
	|--------------------------------------------------------------------------
	*/
  entra: {
    driver: 'entra',
    clientId: Env.get('ENTRA_CLIENT_ID'),
    clientSecret: Env.get('ENTRA_CLIENT_SECRET'),
    tenantId: Env.get('ENTRA_TENANT_ID'),
    callbackUrl: 'http://localhost:3333/entra/callback',
  },
}
```
