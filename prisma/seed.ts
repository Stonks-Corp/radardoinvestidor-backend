import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.fundo.upsert({
    where: {cnpj_fundo: 'line[0]'},
    update: {},  
    create: {
        cnpj_fundo: 'line[0]',
        dt_cancel: new Date('29/04/2021'),
        admin: 'ADMIN',
        cd_cvm: 'CD_CVM',
        dt_fim_exerc: new Date('30/04/2021'),
        classe: 'CLASSE',
        dt_ini_ativ: new Date('28/04/2021'),
        cnpj_admin: 'CNPJ_ADMIN',
        dt_ini_classe: new Date('01/05/2021'),
        dt_ini_exerc: new Date('02/05/2021'),
        condom: 'CONDOM',
        dt_ini_sit: new Date('03/05/2021'),
        cpf_cnpj_gestor: 'CPF_CNPJ_GESTOR',
        sit: 'SIT',
        rentab_fundo: 'RENTAB_FUNDO',
        pf_pj_gestor: 'PF_PJ_GESTOR',
        invest_qualif: 'INVEST_QUALIF',
        vl_patrim_liq: String(0),
        gestor: 'GESTOR',
        trib_lprazo: 'TRIB_LPRAZO',
        fundo_exclusivo: 'FUNDO_EXCLUSIVO',
        tp_fundo: 'TP_FUNDO',
        fundo_cotas: 'FUNDO_COTAS',
        taxa_perfm: String(0),
        dt_patrim_liq: new Date('04/05/2021'),
        taxa_adm: String(0),
        auditor: 'AUDITOR',
        denom_social: 'DENOM_SOCIAL',
        cnpj_auditor: 'CNPJ_AUDITOR',
        dt_const: new Date('05/05/2021'),
      },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })