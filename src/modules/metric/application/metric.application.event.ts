export namespace MetricApplicationEvent {
  export namespace MetricCreated {
    export const key = 'metric.application.metric.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
