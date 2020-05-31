function myfun()
{
    var x= document.getElementById("n").value;
    var y= document.getElementById("c").value;
    var ph= document.getElementById("p").value;
    var pin= document.getElementById("pc").value;
    var hasNumber = /\d/;
    var nums = /^[0-9]+$/;
    if(hasNumber.test(x))
    {
        alert("There is Number In Name,Please Enter Valid One")
    }
    if(hasNumber.test(y))
    {
        alert("There is Number In City,Please Enter Valid One")
    }
    if(!(ph.match(nums)))
    {
        alert("There is Character In Phone,Please Enter Valid One")
    }
    if(!(pin.match(nums)))
    {
        alert("There is Character In PinCode,Please Enter Valid One")
    }

    alert("Thank You For Your Valid Response");

}