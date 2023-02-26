const getCurrentDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let monthTxt;

  switch (month) {
    case 1:
      monthTxt = "January";
    case 2:
      monthTxt = "February";
  }

  let todayTxt = monthTxt + " " + day + ", " + year;

  let currentDate = document.querySelectorAll(".date");
  for (let i = 0; i < currentDate.length; i++) {
    currentDate[i].innerText = todayTxt;
  }
};

getCurrentDate();

const sendMail = () => {
  const mailAdress = "someone@example.com";
  const ccRecipients = "vinamiincanada@gmail.com";
  const subject = encodeURIComponent("This is my subject");
  const body = encodeURIComponent(document.getElementById("myText").value);
  const link = `mailto:${mailAdress}?cc=${ccRecipients}&subject=${subject}&body=${body}`;
  window.location.href = link;
};
