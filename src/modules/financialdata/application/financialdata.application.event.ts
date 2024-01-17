export namespace FinancialdataApplicationEvent {
  export namespace FinancialdataCreated {
    export const key = 'financialdata.application.financialdata.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
