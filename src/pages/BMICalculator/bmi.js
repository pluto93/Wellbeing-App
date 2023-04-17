function calcBmi()
{
    document.getElementById("Result").value = null;
    let weight = document.getElementById("Weight").value;
    let height = document.getElementById("Height").value;
    if(weight == null|| weight == "" || weight <= 0)
    {
        return window.alert("You must enter a valid weight number");
    }
    if(height == null|| height == "" || height < 0 || height > 3)
    {
        return window.alert("You must enter a valid height number in meters");
    }
    let bmi = (weight / (height*height));
    if(bmi > 0){
        document.getElementById("Result").value = bmi.toFixed(2);
    }
}