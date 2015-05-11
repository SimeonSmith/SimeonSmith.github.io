function page_date(theDateObj){
	var Today = theDateObj;
	var y = Today.getFullYear();
	var mon = Today.getMonth();
	var d = Today.getDate();
	var dayth = "th";
	if (d == 1)
		dayth = "st";
	if (d == 2)
		dayth = "nd";
	if (d == 3)
		dayth = "rd";
	if (d == 21)
		dayth = "st";
	if (d == 22)
		dayth = "nd";
	if (d == 23)
		dayth = "rd";
	if (d == 31)
		dayth = "st";
	switch (mon){
		case 0: mon = "January"; break;
		case 1:	mon = "February"; break;
		case 2: mon = "March"; break;
		case 3: mon = "April"; break;
		case 4: mon = "May"; break;
		case 5: mon = "June"; break;
		case 6: mon = "July"; break;
		case 7: mon = "August"; break;
		case 8: mon = "September"; break;
		case 9: mon = "October"; break;
		case 10: mon = "November"; break;
		default: mon = "December";
	}
	document.write(d + "" + dayth + " of " + mon + " " + y);
}

function last_modified_on(lastModified)
{
	var date = lastModified;
	document.write("This page was last modified "+date+".");
}