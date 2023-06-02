export default function validateInfo(values) {
    let errors = {}

   //fullname
    if (!values.fullname.trim()) {
        errors.fullname = "Fullname is required"
    }
   //username
   if (!values.username.trim()) {
    errors.username = "Username is required"
   }
   //email
   if (!values.email) {
    errors.email = "Email is required"
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email= "Email address is invalid"
   } 
   //password
   if (!values.password) {
    errors.password = "Password is required"
   } else if ( values.password.length < 6) {
    errors.password = 'Enter a password that contains at least 6 characters'
   }
   //password2
   if (!values.password2) {
    errors.password2 = "password is required"
   } else if (values.password2 !== values.password){
    errors.password2 = "Passwords do not match!!"
   }


   return errors;
}    
