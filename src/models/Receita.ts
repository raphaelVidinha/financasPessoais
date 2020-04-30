import Usuario from './Usuario';

export default class Receita {
  id: string;
  valor: number;
  date: Date;
  user_id: Usuario;
}