import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Financialdata } from '../../../modules/financialdata/domain'

@Entity()
export class Metric {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true,"type":"numeric"})

cashMetric?: number

@Column({"nullable":true,"type":"numeric"})

revenueMetric?: number

@Column({"nullable":true,"type":"numeric"})

unitEconomicMetric?: number

@Column({})

financialDataId: string

@ManyToOne(
  () => Financialdata,
  parent => parent.metricsAsFinancialData,
  )
  @JoinColumn({ name: 'financialDataId' })

financialData?: Financialdata

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
