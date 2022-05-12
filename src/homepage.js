import Banner from './banner.png'

function component() {
  const element = document.createElement("div");

  const banner = new Image();
  banner.src = Banner;

  element.appendChild(banner);

  const headline = document.createElement("h2")
  headline.textContent = "BEST FOOD TRUCK IN THE WASTELAND"

  element.appendChild(headline)

  const info = document.createElement("p")
  info.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  element.appendChild(info)

  return element;
}

export { component };