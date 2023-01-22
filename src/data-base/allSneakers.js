import sneak from "../assets/sneaker.jpg"
import sneak2 from "../assets/sneaker2.jpg"
import sneak3 from "../assets/sneaker3.webp"


const allSneakers = {
		jordan1: {
			cardIMG: sneak,
			cardName: 'Air Jordan 1 mid light',
			cardPrice: 120,
			cardColor: 'white',
			properties: "Make your stride iconic with the Air Jordan 1. Classic leather pairs with pony hair detailing throughout, while crafted details like the metallic Wings logo hardware add a premium boost to any 'fit. The finishing touch? Air cushioning underfoot lets you keep pace in comfort, so nothing holds you back from showing off your legendary look.",
			rating: [1, 1, 1, 1, 0],
			id: 0,
			main: 1
		},
		jordan4: {
			cardIMG: sneak2,
			cardName: 'Air Jordan 4 Retro JS',
			cardPrice: 245,
			cardColor: 'white',
			properties: 'The Jordan 4 Retro is inspired by the original AJ4. Made with real and synthetic leather and textile, soft foam cushioning, and play-ready rubber traction, it features the mesh paneling and angled overlays that made the shoe so memorable.',
			rating: [1, 1, 1, 1, 0],
			id:1,
			main: 0
		},
		airForce1:
		{
			cardIMG: sneak3,
			cardName: 'Air Force 1 Low',
			cardPrice: 120,
			cardColor: 'white',
			properties: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
			rating: [1, 1, 1, 1, 0],
			id: 2,
			main: 0
		}
}

const allSneakersList = [
	allSneakers.jordan1,
	allSneakers.jordan4,
	allSneakers.airForce1
]



export {allSneakers, allSneakersList}