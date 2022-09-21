const ENTITY_MDV2 = "newslettercustombruno"
const SCHEMA_MDV2 = "newslettercustombruno"


import { result } from "../../utils/return"

interface SubscriptionDefine {
  userEmail: string
  categories: [string]
}

export const createSubscription = async (
  _: unknown,
  _props: SubscriptionDefine,
  _ctx: Context
)=> {

  try {
    const updateResponse = await _ctx.clients.masterdata.createDocument({
      dataEntity: ENTITY_MDV2,
      schema: SCHEMA_MDV2,      
      fields: _props,
    })
    console.log('UPDATED USER', updateResponse)
    console.log(result(200))
    console.log(_props  )

  } catch (e) {
    console.log(`failed to update user `)
    console.log(e)
    console.log(result(500))
  }

  return  (_props)
  
  /* 
  try {
    const saveduser = await _ctx.clients.masterdata.searchDocuments<{
      id: string
      userEmail: string
      categories: [string]
    }>({
      dataEntity: COURSE_ENTITY,
      fields: ['userEmail', 'categories'],
      pagination: {
        page: 1,
        pageSize: 1,
      },
      schema: 'teste-newsletter',
      //where: `userEmail=${_props.userEmail}`,
    })
    console.log('SAVED USER', saveduser)

  } catch (e) {
    console.log(`failed to create user `)
    console.log(e)
  }

 */
}
