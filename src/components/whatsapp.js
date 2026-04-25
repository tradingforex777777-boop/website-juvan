function sendwhatsapp(){
    var phonenumber = "+6282312451989";
          
    var nama = document.queryselector('.nama').value;
    var nomorhp = document.queryselector('.nomorhp').value;
    var email = document.queryselector('.email').value;
    var subjek = document.queryselector('.subjek').value;
    var pesan = document.queryselector('.pesan').value;
          
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*nama :* " +nama+"%0a"
    +"*nomorhp :* " +nomorhp+"%0a"
    +"*email :* " +email+"%0a"
    +"*subjek :* " +subjek+"%0a"
    +"*pesan :* " +pesan+"%0a%0a";
  
    window.open(url, '_blank').focus();      
  }
