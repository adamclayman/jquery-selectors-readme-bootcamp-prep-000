// declare your functions here...
// $(document).ready(function () {
function paragraphSelector() {
  const paragraphs = $('p');
  return paragraphs;
}

function lastImageSelector() {
  const lastImage = $('img:last');
  return lastImage;
}

function ninjaBabySelector() {
  const babyNinja = $('#baby-ninja');
  return babyNinja;
}

function divSelector() {
  const divsWithClassPic = $("div[class='pic']");
  return divsWithClassPic;
}

function firstListItem() {
  const firstChildOfListItem = $("ul[id='pic-list']:first-child");
  return firstChildOfListItem;
}

// });
