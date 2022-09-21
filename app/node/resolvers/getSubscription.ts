// const ENTITY_MDV2 = "newslettercustombruno"
// const SCHEMA_MDV2 = "newslettercustombruno"


interface SubscriptionRequest {
  userEmail: string    
  categories? : [string]
}

interface SubscriptionReturn {
  userEmail: string
  categories? : [string]
}

export const getSubscription = async (
  _: unknown,
  _props: SubscriptionRequest,
  _ctx: Context
): Promise<SubscriptionReturn> => {
  console.log(_props)
  
  const { userEmail , categories } = _props

  return {    
    userEmail,
    categories
  }
}
