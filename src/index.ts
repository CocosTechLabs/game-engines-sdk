import { GameFiBase, GameFiInitializationParams } from './common/game-fi';
export { GameFiInitializationParams } from './common/game-fi';
export * from './common/external';
export class CocosGameFi extends GameFiBase {
  public static async create(params: GameFiInitializationParams = {}): Promise<CocosGameFi> {
    return new CocosGameFi(await CocosGameFi.createDependencies(params));
  }

  public async openModal(): Promise<void> {
    if (this.walletConnector) {
      if (!this.walletConnector.connected) {
        return await this.walletConnector.openModal();
      }
    }
  }
}