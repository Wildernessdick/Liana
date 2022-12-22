/* i think alarmbox is bit anoing ? */
function newsLetter() {
  alert("Thank you for ordering our newsletter!");
}

function validateForm() {
  let x = document.forms["newsletter"]["email"].value;
  if (x == "") {
    alert("give your email");
  } else if (x.includes("@") && x.includes(".")) {
    location.href = "Demo/newsletter.html";
    return;
  } else {
    alert("Email is not correct");
    return false;
  }
}

// I had problems with rss, so i hope my json workaround it's ok...

window.onload = async function () {
  let url =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lianatech.com%2Fresources%2Fblog.rss";
  var arr = [];

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      arr.push(data.items[0]);
      arr.push(data.items[1]);
      arr.push(data.items[2]);
    })

    .catch(function (error) {
      console.log(error);
    });

  try {
    document.getElementById("news1date").innerHTML = arr[0].pubDate;
    document.getElementById("news1title").innerHTML = arr[0].title;
    document.getElementById("news2date").innerHTML = arr[1].pubDate;
    document.getElementById("news2title").innerHTML = arr[1].title;
    document.getElementById("news3date").innerHTML = arr[2].pubDate;
    document.getElementById("news3title").innerHTML = arr[2].title;
  } catch {
    console.log("cant parse news feed");
  }
};
