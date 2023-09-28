import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class EntraProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { EntraDriver } = await import('../src/Entra')

    Ally.extend('entra', (_, __, config, ctx) => {
      return new EntraDriver(ctx, config)
    })
  }
}
