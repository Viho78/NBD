db.nbd_col.aggregate([
	{
		$match: { sex: {$regex: 'Male'}}
	},
	{
    	$project:
      	{ 
        	_id: 0,
			sex: 1,
        	hh: { $toDouble: "$height" },
        	ww: { $toDouble: "$weight" },
      	}
  	},
	{
		$group: { _id: '$sex', 
			sred_waga: { $avg: '$ww'},
			sred_wys: { $avg: '$hh'}}
	},
	{
		$sort: {sred_waga: 1, sred_wys: 1}
	}
])

db.nbd_col.aggregate([
	{
		$match: { sex: {$regex: 'Female'}}
	},
	{
    	$project:
      	{ 
        	_id: 0,
			sex: 1,
        	hh: { $toDouble: "$height" },
        	ww: { $toDouble: "$weight" },
      	}
  	},
	{
		$group: { _id: '$sex', 
			sred_waga: { $avg: '$ww'},
			sred_wys: { $avg: '$hh'}}
	},
	{
		$sort: {sred_waga: 1, sred_wys: 1}
	}
])