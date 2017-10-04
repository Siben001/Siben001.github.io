function day_quote()
{
	var arr = [];
	arr[0] = 'All successful men and women are big dreamers. They imagine what their future could be, ideal in every respect, and then they work every day toward their distant vision, that goal or purpose.” – Brian Tracy';
	arr[1] = 'Genius is one percent inspiration and ninety-nine percent perspiration. – Thomas Edison';
	arr[2] = 'You can observe a lot just by watching. – Yogi Berra';
	document.getElementById('info').innerHTML = arr[Math.round(Math.random()*(arr.length-1))];
}
