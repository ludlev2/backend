import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Financialdata } from './financialdata.model'

import { User } from '../../user/domain'

@Injectable()
export class FinancialdataDomainFacade {
  constructor(
    @InjectRepository(Financialdata)
    private repository: Repository<Financialdata>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Financialdata>,
  ): Promise<Financialdata> {
    return this.repository.save(values)
  }

  async update(
    item: Financialdata,
    values: Partial<Financialdata>,
  ): Promise<Financialdata> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Financialdata): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Financialdata> = {},
  ): Promise<Financialdata[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Financialdata> = {},
  ): Promise<Financialdata> {
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

async findManyByUser(
    user: User,
    queryOptions: RequestHelper.QueryOptions<Financialdata> = {},
  ): Promise<Financialdata[]> {
    if (!user) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: user.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
