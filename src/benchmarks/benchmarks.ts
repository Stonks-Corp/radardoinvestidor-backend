import axios from 'axios';
import dayjs from 'dayjs';

const getBenchmark = async (
  benchmark: string,
  from?: string,
  to?: string
): Promise<{ data: string; valor: string }[]> => {
  /*
   * CÓDIGO 12: CDI
   * CÓDIGO 7832: BOVESPA
   * */
  let codeBenchmark;

  switch(benchmark) {

    case 'CDI':
      codeBenchmark = 12;
      break;
      
    case 'BOVESPA':
      codeBenchmark = 7832;
      break;
      
      case 'SELIC':
      codeBenchmark = 11;
      break;
  }

  const bechmarkRequest = await axios.get<{ data: string; valor: string }[]>(
    `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codeBenchmark}/dados`,
    {
      params: {
        formato: 'json',
        dataInicial: from,
        dataFinal: to || dayjs().format('DD/MM/YYYY'),
      },
    }
  );

  return bechmarkRequest.data.filter(
    (value) =>
      !(
        from &&
        dayjs(value.data, 'DD/MM/YYYY').isBefore(dayjs(from, 'DD/MM/YYYY'))
      )
  );
};

export default getBenchmark;
