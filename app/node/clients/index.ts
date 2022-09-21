import { IOClients } from '@vtex/api'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  /* 
  public get status() {
    return this.getOrSet('status', Status)
  }
  
  public get videoBanner() {
    return this.getOrSet('videoBanner', VideoBanner)
  } 
  */
}

/* 



import { MasterData } from '@vtex/api'

interface Subscription {
  userEmail: string
  categories: [string]
}

const ENTITY_MDV2 = "newslettercustombruno"
const SCHEMA_MDV2 = "newslettercustombruno"


export class UserSubscription extends MasterData {
  public async getNewsletterSubs() {
    const resp = await this.searchDocumentsWithPaginationInfo({
      dataEntity: ENTITY_MDV2,
      schema: SCHEMA_MDV2,
      fields: ['userEmail', 'categories'],
      pagination: {
        page: 1,
        pageSize: 999,
      },
      sort: 'createdIn ASC',
    })

    return await resp
  }

  public async create(_props: Subscription) {
    console.log('uee', _props)

    const resp = await this.createDocument({
      dataEntity: ENTITY_MDV2,
      schema: SCHEMA_MDV2,
      fields: _props,
    })

    return await resp
  }
  public async delete(id: string) {
    const resp = await this.deleteDocument({
      dataEntity: ENTITY_MDV2,
      id,
    })

    return resp
  }
  public async update(id: string, _props: Subscription) {
    console.log(_props);
    
    await this.updatePartialDocument({
      dataEntity: ENTITY_MDV2,
      schema: SCHEMA_MDV2,
      fields: _props,
      id: id,
    })

    return { ..._props }
  }
}

*/
