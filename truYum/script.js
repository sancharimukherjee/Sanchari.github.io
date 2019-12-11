function validateForm()
{
    var title=document.forms["editMenu"]["title"].value;
    if(title == ""){
        alert("Title is required");
        return false;
    }

    var TitleLength=title.length;
    if(TitleLength < 2 || TitleLength > 100)
    {
        alert("Title should have 2 to 100 characters");
        return false;
    }
    
    
    var price=document.forms["editMenu"]["price"].value;
    if(isNaN(price)) 
{
    alert("Price has to be a number");
    return false;
}

if(price == "")
{
    alert("Price is required");
    return false;
}

var dateOfLaunch= document.forms["editMenu"]["dateOfLaunch"].value;
if(dateOfLaunch == "")
{
    alert("Date of Launch is required");
    return false;
}

if(!dateOfLaunch.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/))
{
    alert("Incorrect date format(dd/mm/yyyy)");
    return false;
}

var  category= document.forms["editMenu"]["category"].value;
if(category== "0")
{
    alert("Select one category");
    return false;
}
}


