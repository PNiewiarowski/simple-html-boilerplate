class Tools {
  constructor(selector, tools) {
    this.selector = selector;
    this.tools = tools;
    this.HTMLElement = null;

    this.init();
  }

  init() {
    this.HTMLElement = document.querySelector(this.selector);

    this.render();
  }

  render() {
    this.tools.forEach((tool) => {
      const newItem = document.createElement("li");
      newItem.classList.add("tools__item");

      const toolName = document.createElement("p");
      toolName.classList.add("tools__name");
      toolName.innerHTML = tool.name;

      const toolDocumentation = document.createElement("a");
      toolDocumentation.classList.add("tools__documentation");
      toolDocumentation.href = tool.documentation;
      toolDocumentation.innerHTML = "Documentation";
      toolDocumentation.target = "_blank";

      newItem.appendChild(toolName);
      newItem.appendChild(toolDocumentation);

      this.HTMLElement.appendChild(newItem);
    });
  }
}

export default Tools;