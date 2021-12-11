const getData = () => {
	fetch('logements.json', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	})
		.then(reponse => reponse.json())
		.then(json => console.log(json))
}
export default getData
