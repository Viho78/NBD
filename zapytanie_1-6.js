printjson(db.nbd_col.insert(
	{
		sex: 'Male',
		first_name: 'Juliusz',
		last_name: 'Stanczyk',
		job: 'Test Analist',
		email: 's24206@pjatk.pl',
		'location.city': 'Warsaw',
		'location.address.streetname': 'Ulica',
		'location.address.streetnumber': '111',
		description: 'Lubie nalesniki i herbate',
		height: '179',
		weight: '68',
		birth_date: "1998-01-01T11:11:11Z",
		nationality: 'Polish',
		'credit.type': 'switch',
		'credit.number': '9999888939100098699',
		'credit.currency': 'PLN',
		'credit.balance': '7777777777.77'
	},
))


printjson(db.nbd_col.find( {'first_name': 'Juliusz'} ).toArray())