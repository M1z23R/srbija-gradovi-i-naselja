const parseCityAndParts = (li) => {
  const anchors = li.getElementsByTagName("a");
  const cityAnchor =
    li.getElementsByTagName("b")[0]?.getElementsByTagName("a")[0] || null;
  const city = cityAnchor ? cityAnchor.textContent.trim() : null;

  const parts = Array.from(anchors)
    .filter((a) => a !== cityAnchor)
    .map((a) => a.textContent.trim());

  const lastText = li.lastChild.textContent;
  if (lastText.includes("i")) {
    const lastPart = parts.pop();
    parts.push(lastPart.replace(/\.$/, ""));
  }

  return { city, parts };
};

const containers = document.getElementsByClassName("mw-content-ltr");
const arr = [];

for (const container of containers) {
  const uls = container.getElementsByTagName("ul");
  for (const ul of uls) {
    const lis = ul.getElementsByTagName("li");
    for (const li of lis) {
      arr.push(parseCityAndParts(li));
    }
  }
}

console.log(arr);
