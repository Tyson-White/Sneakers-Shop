import { allSneakersList } from "./allSneakers"

const jordans = {
	name: 'Jordans',
	list: []
}

const airForces = {
	name: 'airForces',
	list: []
}



const allSneakers = [jordans, airForces]

for (var i = 0; i < allSneakersList.length; i++) {
	if (allSneakersList[i].cardName.indexOf('Jordan') > 0) {
		jordans.list.push(allSneakersList[i])
		console.log(allSneakersList[i].cardName)
	} else if (allSneakersList[i].cardName.indexOf('Force') > 0) {
		airForces.list.push(allSneakersList[i])
	} 
}

export { jordans, airForces, allSneakers }