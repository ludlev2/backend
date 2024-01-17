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

import { User } from '../../../modules/user/domain'

import { Metric } from '../../../modules/metric/domain'

@Entity()
export class Financialdata {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({"nullable":true})

data?: string

@Column({"nullable":true})

submissionDate?: string

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.financialdatas,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Metric,
  child => child.financialData,
  )

metricsAsFinancialData?: Metric[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
