import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const createCityService = async (cityInput : any) => {
	console.log('============= cityInput ============ : ', cityInput);	
	return await prisma.city.create({
		data: cityInput
	});	
}

export default createCityService