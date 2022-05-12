import DessertShooter from './DessertShooters.webp'
import CrabCakes from './CrabCakes.webp'

function component() {
  const element = document.createElement("div");

  const food1 = document.createElement("div");

  const dessertShooter = new Image();
  dessertShooter.src = DessertShooter;

  food1.appendChild(dessertShooter);

  const dessertShooterInfo = document.createElement("p");
  dessertShooterInfo.textContent = "Dessert shooters are miniature desserts traditionally served in shot glasses. Although the conceptual origin of dessert shooters is unknown, it is believed that dessert shooters were created by the United States government in the mid-1990s as a response to the rising rates of obese and otherwise unhealthy American citizens.";

  food1.appendChild(dessertShooterInfo);

  element.appendChild(food1);

  const food2 = document.createElement("div");

  const crabCakes = new Image();
  crabCakes.src = CrabCakes;

  food1.appendChild(crabCakes);

  const crabCakesInfo = document.createElement("p");
  crabCakesInfo.textContent = "Crab cake-type foods first appeared during the American colonial days, and proliferated through the 19th century as the colonials were scared to venture west to the unknown lands of the natives for more mainstream food like beef.";

  food2.appendChild(crabCakesInfo);

  element.appendChild(food2);

  return element;
}

export { component }; 