import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
//import { johnTestFunction } from './js/nameChecker'

//import all scss files as dependency
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

console.log(checkForName);
//johnTestFunction();

//alert("I EXIST")

export {
    checkForName,
    handleSubmit
}