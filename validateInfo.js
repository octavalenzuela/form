export default function validateInfo(values){
    let errors ={}
    if(!values.username.trim()){
        errors.username = "Nombre de usuario requerido";
    }
    if(!values.email()){
        errors.email = "email requerido"
    }
   if(!values.pass){
        errors.pass= 'pass invalida'
    }else if(values.pass.length<8){
        errors.pass='la pass requiere mas de 8 caracteres'
    }
    if(!values.pass2){
        errors.pass2= 'pass invalida'
    }else if(values.pass2 !== values.password){
        errors.pass2='no coinciden'
    }
return errors;
}
