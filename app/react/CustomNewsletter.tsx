import React from 'react';
import CustomNewsletterForm from "./CustomNewsletterForm"
import { useMutation } from 'react-apollo'
import CREATESUBSCRIPTION from "./graphql/createSubscription.graphql"

interface CountdownProps {}

const CustomNewsletter: StorefrontFunctionComponent<CountdownProps> = ({ }) => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [createSubscriptionMutation] = useMutation(CREATESUBSCRIPTION)

  function handleEmail(email: string) {
    setEmail(email)
  }
  function handleName(name: string) {
    setName(name)
  }
  function handleSubmit(categories: any) {
    console.log(name, email)
    console.log(categories)
    subscribe(categories)
  }

  async function subscribe(categories : any){
    await createSubscriptionMutation({
      variables: {
      email : email, 
      categories : Object.keys(categories)
      },
    })
  }

  return (
    <CustomNewsletterForm
      userName={name}
      setName={handleName}
      userEmail={email}
      setEmail={handleEmail}
      onSubmit={handleSubmit}
    >
    </CustomNewsletterForm>
  )
}


export default CustomNewsletter