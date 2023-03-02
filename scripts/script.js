//load current date on the website
const getCurrentDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let monthTxt;

  switch (month) {
    case 1:
      monthTxt = "January";
      break;
    case 2:
      monthTxt = "February";
      break;
    case 3:
      monthTxt = "March";
      break;
    case 4:
      monthTxt = "April";
      break;
    case 5:
      monthTxt = "May";
      break;
    case 6:
      monthTxt = "June";
      break;
    case 7:
      monthTxt = "July";
      break;
    case 8:
      monthTxt = "August";
      break;
    case 9:
      monthTxt = "September";
      break;
    case 10:
      monthTxt = "October";
      break;
    case 11:
      monthTxt = "November";
      break;
    case 12:
      monthTxt = "December";
      break;
  }

  let todayTxt = monthTxt + " " + day + ", " + year;

  let currentDate = document.querySelectorAll(".date");
  for (let i = 0; i < currentDate.length; i++) {
    currentDate[i].innerText = todayTxt;
  }
};

getCurrentDate();

//generate one of my favorite quotes randomly
const generateQuote = function () {
  const quotes = [
    {
      quote: "The secret of getting ahead is getting started",
      author: "Mark Twain",
    },
    {
      quote: "The best investment you can make is in yourself",
      author: "Warren Buffett",
    },
    {
      quote: "It always seems impossible until it is done",
      author: "Nelson Mandela",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts",
      author: "Winston Churchill",
    },
    {
      quote:
        "A bend in the road is not the end of the road… unless you fail to make the turn",
      author: "Helen Keller",
    },
    {
      quote: "It’s always too soon to quit!",
      author: "Norman Vincent Peale",
    },
    {
      quote: "The only guarantee for failure is to stop trying",
      author: "John C. Maxwell",
    },
    {
      quote:
        "Perseverance is not a long race; it is many short races one after the other",
      author: "Walter Elliot",
    },
    {
      quote:
        "Failure is only the opportunity to begin again, this time more intelligently",
      author: "Henry Ford",
    },
    {
      quote: "Fall seven times and stand up eight",
      author: "Japanese Proverb",
    },
    {
      quote: "Every great dream begins with a dreamer",
      author: "Harriet Tubman",
    },
    {
      quote:
        "Passion is energy. Feel the power that comes from focusing on what excites you",
      author: "Oprah Winfrey",
    },
  ];
  let arrayIndex = Math.floor(Math.random() * quotes.length);

  document.querySelector("#quote").innerHTML = quotes[arrayIndex].quote;
  document.querySelector("#author").innerHTML = quotes[arrayIndex].author;
};

generateQuote();
