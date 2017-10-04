var arr = [];
var pos;

function day_quote()
{
	arr[2] = 'All successful men and women are big dreamers. They imagine what their future could be, ideal in every respect, and then they work every day toward their distant vision, that goal or purpose.” – Brian Tracy';
	arr[1] = 'Genius is one percent inspiration and ninety-nine percent perspiration. – Thomas Edison';
	arr[0] = 'You can observe a lot just by watching. – Yogi Berra';
	pos = Math.round(Math.random()*(arr.length-1));
	document.getElementById('main_q').innerHTML = arr[pos];

}

function sort_quote()
{
	arr.sort();
	for (var i=0;i<3;i++)
	{	
		document.getElementById('info_'+i).innerHTML = arr[i];
	}
}
