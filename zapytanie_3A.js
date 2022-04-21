db.nbd_col.aggregate(
	[
		{
			$group: {_id: '$job'}
		}
	]
)












