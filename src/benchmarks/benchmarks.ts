import axios from 'axios';

const getCdi = async (
  from?: string,
  to?: string
): Promise<{ data: string; valor: string }[]> => {
  const cdiRequest = await axios.get<{ data: string; valor: string }[]>(
    'https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados',
    {
      params: {
        formato: 'json',
        dataInicial: from,
        dataFinal: to,
      },
    }
  );
  return cdiRequest.data;
};

export default getCdi;
