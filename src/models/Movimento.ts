import Usuario from './Usuario';
import TipoDespesa from './TipoDespesa';

export default class Movimento {
  id: string;
  valor: number;
  tipo: TipoDespesa;
  date: Date;
  user_id: Usuario;
}