# Adonis Ally - Entra Sign In Driver

> adonis, adonis-ally, entra

[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

This driver extends Adonis Ally and allows to integrate Entra Sign In.

## Installation

```bash
npm install ally-entra
# or
yarn add ally-entra
# or
pnpm add ally-entra
```

As the package has been installed, you have to configure it by running a command:

```bash
node ace configure ally-entra
```

Then open the `env.ts` file and paste the following code inside the `Env.rules` object.

```ts
ENTRA_CLIENT_ID: Env.schema.string(), 
ENTRA_CLIENT_SECRET: Env.schema.string(),
ENTRA_TENANT_ID: Env.schema.string.optional(),
```

And don't forget to add these variables to your `.env` and `.env.example` files.

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

## Usage

Entra Driver environment variables have some specific usage:

- `ENTRA_CLIENT_ID` - your app client id
- `ENTRE_CLIENT_SECRET` - your app private key
- `ENTRA_TENANT_ID` - optional: your organization tenant id

For usage examples for Adonis Ally and its methods consult Adonis.js [official docs](https://docs.adonisjs.com/guides/auth/social).

[npm-image]: https://img.shields.io/npm/v/ally-entra.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/ally-entra 'npm'
[license-image]: https://img.shields.io/npm/l/ally-entra?color=blueviolet&style=for-the-badge
[license-url]: LICENSE 'license'
[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"
