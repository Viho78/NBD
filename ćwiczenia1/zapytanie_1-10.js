printjson(db.nbd_col.updateMany(
	{'job': 'Editor'},
	{$unset: {'email': ''}}
))


printjson(db.nbd_col.find( {'job': 'Editor'} ).toArray())
