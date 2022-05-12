function component() {
  const element = document.createElement("div");

  const contactInfo = document.createElement("h1");
  contactInfo.textContent = "Look out the road!! You might catch us some time.";

  element.appendChild(contactInfo);

  return element;
};

export { component };