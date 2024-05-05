let mark = document.querySelector(".reads");
let noti = document.querySelectorAll(".row");
let read = document.querySelectorAll(".read");
let size = document.querySelector("#length");


// Notification Length
size.innerHTML = read.length;


// Marks All Read function
mark.addEventListener("click", () => {
  noti.forEach((e) => {
    e.classList.remove("read");
    size.innerHTML = 0;
  });
});

// Mark one Message Read function
noti.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.remove("read");
    let newUnread = document.querySelectorAll(".read");
    size.innerHTML = newUnread.length;
  });
});
