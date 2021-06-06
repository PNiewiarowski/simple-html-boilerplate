/**
 * @jest-environment jsdom
 */

import Tools from "../app/Tools";

test("check if Tools could render given list items", () => {
  document.body.innerHTML = `<ul data-tools></ul>`;

  new Tools(
    "[data-tools]",
    [
      {
        "id": 0,
        "name": "First tool",
        "documentation": "https://localhost:7070"
      },
      {
        "id": 1,
        "name": "Second tool",
        "documentation": "https://localhost:7070"
      }
    ],
  );

  const renderedListItem = document.querySelector("[data-tools]").getElementsByTagName("li");
  const length = renderedListItem.length;
  const lastItem = renderedListItem[length - 1];
  const lastParagraph = lastItem.getElementsByTagName("p")[0];
  const lastParagraphText = lastParagraph.innerHTML;

  expect(length).toBe(2);
  expect(lastParagraphText).toBe("Second tool");
});
