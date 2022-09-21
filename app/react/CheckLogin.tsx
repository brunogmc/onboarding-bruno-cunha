import { useRuntime } from 'vtex.render-runtime'
import { useRenderSession } from "vtex.session-client"

function CheckLogin() {
  const { loading, session, error } = useRenderSession()
  const { navigate } = useRuntime()
  //@ts-ignore
  const isUserLoged = session?.namespaces?.profile?.isAuthenticated?.value 

  //@ts-ignore
  if ((isUserLoged == "false") & (loading != true) & (error != true)){
    navigate({
      to: '/login'
    })
  }

  return null
}

export default CheckLogin