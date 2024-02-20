const navlinks = document.querySelector(".navlinks");
const SideBarShow = () => {
  navlinks.classList.add("navlinkshow");
};
const SideBarHide = () => {
  navlinks.classList.remove("navlinkshow");
};
document.querySelectorAll("#scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
