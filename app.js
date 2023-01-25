function makeReservation() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const checkIn = new Date(document.getElementById("checkIn").value);
  const checkOut = new Date(document.getElementById("checkOut").value);
  const roomType = document.getElementById("roomType").value;
  const roomPrices = {
    single: 50,
    double: 75,
    suite: 100,
  };
  if (checkIn && checkOut && checkIn < checkOut) {
    let nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    let totalPrice = roomPrices[roomType] * nights;
    let message =
      "Rezervasyon talebiniz alındı! Detaylar: \n" +
      "Ad: " +
      name +
      "\n" +
      "E-posta: " +
      email +
      "\n" +
      "Check-in: " +
      checkIn.toDateString() +
      "\n" +
      "Check-out: " +
      checkOut.toDateString() +
      "\n" +
      "Oda tipi: " +
      roomType +
      "\n" +
      "Kalınacak gece sayısı: " +
      nights +
      "\n" +
      "Toplam fiyat: " +
      totalPrice + "$";
  //   alert(message);
    document.querySelector(".screenText").innerText=`${nights} gece kalınacak`;
    document.querySelector(".screenText2").innerText= `Toplam ücret: ${totalPrice}$`;
    document.querySelector(".screenText3").innerText= message
  } else {
    alert("Lütfen geçerli check-in ve check-out tarihlerini seçin");
  }
}
