/**
 * Criação de usuário
 */

 interface iCreateUser {
  nome? :string;
  email:string
  password:string;
  techs:Array<string | iTechs>
}

interface iTechs {
  title:string;
  experience:number;
}

export default function createUser(
  { nome = "",
    email,
    password,
    techs
  }: iCreateUser) {
    const user = {
      nome,
      email,
      password,
      techs
      };
  return user;
  }