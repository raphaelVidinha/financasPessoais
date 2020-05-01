import Usuario from './Usuario';

export default class Despesa {
  id: string;
  valor: number;
  parcelado: boolean;
  qtd_parcelas: number;
  date: Date;
  user_id: Usuario;
}