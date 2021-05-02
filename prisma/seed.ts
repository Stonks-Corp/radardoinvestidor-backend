import fs from 'fs';
import { PrismaClient } from '@prisma/client';

interface IFunds {
  cnpj_fundo: string;
  auditor: string;
  cnpj_auditor: string;
  denom_social: string;
  dt_const: string;
  dt_cancel: string;
  admin: string;
  cd_cvm: string;
  dt_fim_exerc: string;
  classe: string;
  dt_ini_ativ: string;
  cnpj_admin: string;
  dt_ini_classe: string;
  dt_ini_exerc: string;
  condom: string;
  dt_ini_sit: string;
  cpf_cnpj_gestor: string;
  sit: string;
  rentab_fundo: string;
  pf_pj_gestor: string;
  invest_qualif: string;
  vl_patrim_liq: string;
  gestor: string;
  trib_lprazo: string;
  fundo_exclusivo: string;
  tp_fundo: string;
  fundo_cotas: string;
  taxa_perfm: string;
  dt_patrim_liq: string;
  taxa_adm: string;
}

const prisma = new PrismaClient();

async function main() {
  const fundos = fs.readFileSync('prisma/fundosMock.json', 'utf-8');

  const parsedFunds: IFunds[] = JSON.parse(fundos);

  await Promise.all(
    parsedFunds.map(async (fund) => {
      await prisma.fundo.create({
        data: fund,
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
