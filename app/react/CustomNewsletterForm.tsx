import React, { useEffect } from 'react';
import { Input } from 'vtex.styleguide'
import { Button } from 'vtex.styleguide'
import { useRenderSession } from "vtex.session-client"
import { useCssHandles } from 'vtex.css-handles'
import NewsletterCategory from "./CategoryNewsletter"

const CSS_HANDLES = ['nameInputContainer', 'emailInputContainer', 'checkBoxInputContainer', 'formSubmitContainer', 'buttomSubmit']

interface CustomNewsletterForm {
  userName: String
  setName: Function
  userEmail: String
  setEmail: Function
  onSubmit: Function
}

const CustomNewsletterForm: StorefrontFunctionComponent<CustomNewsletterForm> = ({ userName, setName, userEmail, setEmail, onSubmit }) => {

  const { loading, session, error } = useRenderSession()
  //@ts-ignore  
  const isUserLoged = session?.namespaces?.profile?.isAuthenticated?.value
  const handles = useCssHandles(CSS_HANDLES)
  
  interface categoriesIneterface extends Record<string, any> {}  
  const categories: categoriesIneterface = {};   

  const handleEmail = (e: any) => {
    setEmail(e?.target.value)
  }
  const handleName = (e: any) => {
    setName(e?.target.value)
  }
  const handlecategory = (name: string, check: boolean) => {
    if (check === false){
      delete categories[name]
    }
    else{
      categories[name] = check;
    }
  }

  function treatSubmit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(categories)
  }

  useEffect(() => { // once loged set the value based on user login
    if ((isUserLoged != "false") && (loading != true) && (error != true)) {
      //@ts-ignore  
      var newUserEmail = session?.namespaces?.authentication?.storeUserEmail?.value
      setEmail(newUserEmail)
    }
  }, [isUserLoged])

  return (
    <form>
      <div className={handles.nameInputContainer}>
        <Input
          id="newsletter-input-name"
          name="newsletter"
          placeholder={"Digite seu Nome"}
          value={userName}
          onChange={handleName}
        />
      </div>
      <div className={handles.emailInputContainer}>
        <Input
          id="newsletter-input-email"
          type="email"
          name="newsletter"
          placeholder="Digite seu email"
          value={userEmail}
          onChange={handleEmail}
        />
      </div>
      <div className={handles.checkBoxInputContainer}>
        <NewsletterCategory categoryName="Cachorros" handlecategory={handlecategory}></NewsletterCategory>
        <NewsletterCategory categoryName="Gatos" handlecategory={handlecategory}></NewsletterCategory>
        <NewsletterCategory categoryName="Aves" handlecategory={handlecategory}></NewsletterCategory>
        <NewsletterCategory categoryName="Roedores" handlecategory={handlecategory}></NewsletterCategory>
        <NewsletterCategory categoryName="Repteis" handlecategory={handlecategory}></NewsletterCategory>
      </div>
      <div className={handles.formSubmitContainer}>
        <Button type="submit" onClick={treatSubmit} className={handles.buttomSubmit}>
          enviar
        </Button>
      </div>
    </form>
  )

}


export default CustomNewsletterForm