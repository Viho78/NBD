db.nbd_col.updateMany(
{},
[
  { 
      $set: { 
          credit: { 
              $map: { input: "$credit", in: { $mergeObjects: [ "$$this", { val: { $toDouble: "$$this.balance" } } ] } }
          }
      }
  }
] )



db.nbd_col.aggregate([
	{ $unwind : "$credit"},
	{ $unwind : "$credit.currency"},
	{
		$group:{
			_id: '$credit.currency',
			suma: {$sum: '$credit.val'},		
		}
	}
]).pretty()

















