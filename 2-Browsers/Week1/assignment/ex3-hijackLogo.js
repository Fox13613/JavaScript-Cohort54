function hijackGoogleLogo() {

  const logoSvg = document.querySelector("svg[aria-label='Google']");
  if (logoSvg) {
    const img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/HackYourFuture/Assignments/main/assets/hyf-logo-black-bg-small.png";
    img.srcset = img.src;
    img.alt = "HYF Logo";

    logoSvg.replaceWith(img);
  }
}

hijackGoogleLogo();
