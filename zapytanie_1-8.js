printjson(db.nbd_col.updateMany(
	{'location.city': 'Moscow'},
	{$set: {'location.city': 'Moskwa'}}
))


printjson(db.nbd_col.find( {'location.city': 'Moskwa'} ).toArray())

printjson(db.nbd_col.find( {'location.city': 'Moscow'} ).toArray())