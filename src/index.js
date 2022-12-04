function TimeUpdate() {
  let TurkeyElement = document.querySelector("#Istanbul");
  let TurkeyDate = TurkeyElement.querySelector(".date");
  let TurkeyTime = TurkeyElement.querySelector(".time");
  let TurkeyTimeElement = moment().tz("Asia/Istanbul");

  TurkeyDate.innerHTML = moment().format("Do MMMM YYYY");
  TurkeyTimeElement = `${TurkeyTimeElement.format(
    "h:mm:ss [<small>]a[</small>]"
  )}`;
  TurkeyTime.innerHTML = TurkeyTimeElement;

  let GermanyElement = document.querySelector("#Berlin");
  let BerlinDate = GermanyElement.querySelector(".date");
  let BerlinTime = GermanyElement.querySelector(".time");
  let BerlinTimeElement = moment().tz("Europe/Berlin");

  BerlinDate.innerHTML = moment().format("Do MMMM YYYY");
  BerlinTimeElement = `${BerlinTimeElement.format(
    "h:mm:ss [<small>]a[</small>]"
  )}`;
  BerlinTime.innerHTML = BerlinTimeElement;

  let ZimTime = document.querySelector("#Harare");
  let ZimDate = ZimTime.querySelector(".date");
  let HarareTime = ZimTime.querySelector(".time");
  let ZimTimeElement = moment().tz("Africa/Harare");

  ZimDate.innerHTML = moment().format("Do MMMM YYYY");
  ZimTimeElement = `${ZimTimeElement.format("h:mm:ss [<small>]a[</small>]")}`;
  HarareTime.innerHTML = ZimTimeElement;
}

TimeUpdate();
setInterval(TimeUpdate, 1000);
