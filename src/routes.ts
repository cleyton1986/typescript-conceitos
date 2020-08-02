import { Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWord(request: Request, response: Response){
  const user = createUser(
     {  nome:'usuário 1', 
        email:'usuario@teste.com', 
        password:'123', 
        techs: ['node.js', 'React.js', 'React-Native',
        {title: 'JavaScript', experience: 50}
      ]}
  );
  return response.json({
    message: `Hello Word ${user.nome}, 
              seu email é ${user.email}. 
              Você usa como tecnologias: ${user.techs}.`,
  });
}