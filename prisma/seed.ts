import { PrismaClient } from '@prisma/client'
import { fundos } from './fundosMock.json'
const prisma = new PrismaClient()

async function main() {

  const fundosKeys = Object.keys(fundos)
  const data = []
  fundosKeys.forEach( (key) => {
    data.push(fundos[key])
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