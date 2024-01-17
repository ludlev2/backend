export namespace InsightApplicationEvent {
  export namespace InsightCreated {
    export const key = 'insight.application.insight.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
