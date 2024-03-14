

function hitungBMI(){
    
    //Mendapatkan nilai dari kedua input
    var berat = document.getElementById("weight").value;
    var tinggi = document.getElementById("height").value;

    //Validasi Input
    if(!isNaN(berat) && !isNaN(tinggi)){
        
    //Melakukuan perhitungan BMI
    var BMI = parseFloat(berat)/((parseFloat(tinggi)/100)*(parseFloat(tinggi)/100))

    //Menampiilkan hasil perhitungan
    document.getElementById("result-bmi").innerHTML= BMI;

    //Menampilkan keterangan hasil perhitungan
    if(BMI<18.5){
        document.getElementById("statusBeratBadan").innerHTML="Kekurangan berat badan"
    } else if (18.5<=BMI&&BMI<=24.9){
        document.getElementById("statusBeratBadan").innerHTML="Normal (ideal)"
    } else if (25<=BMI&&BMI<=29.9){
        document.getElementById("statusBeratBadan").innerHTML="Kelebihan berat badan"
    } else if (30<=BMI){
        document.getElementById("statusBeratBadan").innerHTML="Kegemukan (Obesitas)"
    }   

    } else{
        alert("Anda belum menginputkan angka"); }
}

function resetInput (){
    document.getElementById("formBMI").reset();
}
