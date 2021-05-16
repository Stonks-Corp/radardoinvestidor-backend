import express, { Request, Response } from 'express';
import { addFundInfo, fundUpdate, getFunds } from '../controllers/fund';
import authentication from '../middleware/authentication';

const routes = express.Router();

// Funcao inicial da aplicacao
routes.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

// Pesquisa por fundos no banco de dados,
// passando a query s como argumento string.
// Hoje, a funcao utiliza as colunas 'denom_social' e 'cnpj_fundo' para pesquisar no banco
routes.get('/pesquisa', async (req: Request, res: Response) => {
  try {
    const param = req.query;
    const fundos = await getFunds(
      param?.s as string,
      (param?.skip as unknown) as string
    );
    res.status(200).send(fundos);
  } catch (e) {
    res.status(400).send({
      error: 'Failed to get funds from database',
    });
  }
});

routes.use(authentication);

// Adiciona um novo fundo no banco de dados,
// passando em body, as seguintes colunas:
// ADMIN,
// AUDITOR,
// CD_CVM,
// CLASSE,
// CNPJ_ADMIN,
// CNPJ_AUDITOR,
// CONDOM,
// CPF_CNPJ_GESTOR,
// DENOM_SOCIAL,
// DT_CANCEL,
// DT_CONST,
// DT_FIM_EXERC,
// DT_INI_ATIV,
// DT_INI_CLASSE,
// DT_INI_EXERC,
// DT_INI_SIT,
// DT_PATRIM_LIQ,
// FUNDO_COTAS,
// FUNDO_EXCLUSIVO,
// GESTOR,
// INVEST_QUALIF,
// PF_PJ_GESTOR,
// RENTAB_FUNDO,
// SIT,
// TAXA_ADM,
// TAXA_PERFM,
// TP_FUNDO,
// TRIB_LPRAZO,
// VL_PATRIM_LIQ,
routes.post('/fundo', (req: Request, res: Response) => {
  try {
    addFundInfo(req.body);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({
      error: 'Failed to add entities to database',
    });
  }
});

// Atualiza os valores de um fundo no banco de dados,
// passando em body, as seguintes colunas:
// TP_FUNDO,
// DT_COMPTC,
// VL_TOTAL,
// VL_QUOTA,
// VL_PATRIM_LIQ,
// CAPTC_DIA,
// RESG_DIA,
// NR_COTST
routes.post('/update', (req: Request, res: Response) => {
  try {
    fundUpdate(req.body);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({
      error: 'Failed to add entities to database',
    });
  }
});

export default routes;
