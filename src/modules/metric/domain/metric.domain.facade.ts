import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Metric } from './metric.model'

import { Financialdata } from '../../financialdata/domain'

@Injectable()
export class MetricDomainFacade {
  constructor(
    @InjectRepository(Metric)
    private repository: Repository<Metric>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Metric>,
  ): Promise<Metric> {
    return this.repository.save(values)
  }

  async update(
    item: Metric,
    values: Partial<Metric>,
  ): Promise<Metric> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Metric): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Metric> = {},
  ): Promise<Metric[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Metric> = {},
  ): Promise<Metric> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByFinancialData(
    financialData: Financialdata,
    queryOptions: RequestHelper.QueryOptions<Metric> = {},
  ): Promise<Metric[]> {
    if (!financialData) {
      this.databaseHelper.invalidQueryWhere('financialData')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        financialDataId: financialData.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
