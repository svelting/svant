import { render, clearContext, delay } from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import Select from "../Select.svelte";
import SelectBasic from "examples/select/demos/basic.demo.svelte";
import SelectSearch from "examples/select/demos/search.demo.svelte";
import SelectMultiple from "examples/select/demos/multiple.demo.svelte";

describe("Select component", () => {
  const originalConsole = { ...console };

  beforeEach(() => {
    console = {
      ...console,
      log: jest.fn()
    };
  });

  afterEach(() => {
    console = { ...originalConsole };
    clearContext();
  });

  test("basic functionality", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const selectedValue = container.querySelector(".ant-select-selection-item");
    expect(selectedValue.innerHTML).toContain("Lucy");
    const options = container.querySelectorAll(
      ".ant-select-dropdown .ant-select-item-option"
    );
    const select = container.querySelector(".ant-select");
    await fireEvent.click(select);
    expect(options[1].className).toContain("ant-select-item-option-active");
    const firstOption = container.querySelector(".ant-select-item");
    await fireEvent.mouseEnter(firstOption);
    expect(firstOption.className).toContain("ant-select-item-option-active");
    expect(options[1].className).not.toContain("ant-select-item-option-active");
    await fireEvent.click(firstOption);
    expect(selectedValue.innerHTML).toContain("Jack");
    expect(firstOption.className).toContain("ant-select-item-option-selected");
  });

  test("change event", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelector(".ant-select");
    await fireEvent.click(select);
    const firstOption = container.querySelector(".ant-select-item");
    const mockLog = jest.fn();
    console = {
      ...console,
      log: mockLog
    };
    await fireEvent.click(firstOption);
    expect(mockLog).toBeCalledWith("Selected: jack");
  });

  test("option disabled", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelector(".ant-select");
    await fireEvent.click(select);
    const disabledItem = container.querySelectorAll(".ant-select-item")[2];
    expect(disabledItem.className).toContain("disabled");
    const mockLog = jest.fn();
    console = {
      ...console,
      log: mockLog
    };
    await fireEvent.click(disabledItem);
    expect(mockLog).not.toHaveBeenCalled();
  });

  test("whole select disabled", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelectorAll(".ant-select")[1];
    expect(select.className).toContain("disabled");
    await fireEvent.click(select);
    expect(container.querySelector(".ant-select-dropdown-open")).toBeFalsy();
  });

  test("loading icon", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelectorAll(".ant-select")[2];
    expect(select.innerHTML).toContain("ant-select-arrow-loading");
  });

  test("clearable", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelectorAll(".ant-select")[3];
    const dropdown = container.querySelectorAll(".ant-select-dropdown")[3];
    expect(select.innerHTML).not.toContain("anticon-close-circle");
    await fireEvent.mouseEnter(select);
    expect(select.innerHTML).toContain("anticon-close-circle");
    await fireEvent.mouseLeave(select);
    expect(select.innerHTML).not.toContain("anticon-close-circle");
    await fireEvent.click(select);
    expect(
      dropdown.querySelector(".ant-select-item-option-selected")
    ).toBeTruthy();
    await fireEvent.mouseEnter(select);
    const clearIcon = select.querySelector(".anticon-close-circle");
    await fireEvent.click(clearIcon);
    expect(
      dropdown.querySelector(".ant-select-item-option-selected")
    ).toBeFalsy();
  });

  test("placeholder", () => {
    const { container } = render(Select, {
      placeholder: "Test Placeholder",
      value: ""
    });
    const placeholder = container.querySelector(
      ".ant-select-selection-placeholder"
    );
    expect(placeholder.innerHTML).toContain("Test Placeholder");
  });

  test("search field", async () => {
    const { container } = render(SelectSearch);
    await delay(300);
    const select = container.querySelector(".ant-select");
    const dropdown = container.querySelector(".ant-select-dropdown");
    await fireEvent.click(select);
    expect(select.innerHTML).toContain("anticon-search");
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(3);
    const input = select.querySelector("input");
    await fireEvent.input(input, { target: { value: "j" } });
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(1);
    await fireEvent.input(input, { target: { value: "jj" } });
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(0);
    await fireEvent.input(input, { target: { value: "j" } });
  });

  test("close on click outside", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const selects = container.querySelectorAll(".ant-select");
    await fireEvent.click(selects[0]);
    const dropdown = container.querySelectorAll(".ant-select-dropdown")[0];
    expect(dropdown.className).toContain("ant-select-dropdown-open");
    // click outside
    await fireEvent.mouseUp(container.querySelector(".ant-message"));
    expect(dropdown.className).not.toContain("ant-select-dropdown-open");
  });

  test("close on escape press", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const selects = container.querySelectorAll(".ant-select");
    await fireEvent.click(selects[0]);
    const dropdown = container.querySelectorAll(".ant-select-dropdown")[0];
    expect(dropdown.className).toContain("ant-select-dropdown-open");
    // press escape
    await fireEvent.keyDown(document.body, {
      key: "Escape",
      keyCode: 27,
      which: 27
    });
    expect(dropdown.className).not.toContain("ant-select-dropdown-open");
  });

  describe("multiple select", () => {
    test("can display multiple options", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
      await fireEvent.click(select);
      const dropdown = container.querySelector(".ant-select-dropdown");
      await fireEvent.click(
        dropdown.querySelectorAll(".ant-select-item-option")[1]
      );
      // dropdown should not close
      expect(dropdown).toBeVisible();
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(3);
      // should be able to deselect
      await fireEvent.click(
        dropdown.querySelectorAll(".ant-select-item-option")[1]
      );
      await delay(300);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
    });

    test("can search", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      const dropdown = container.querySelector(".ant-select-dropdown");
      await fireEvent.click(select);
      expect(
        dropdown.querySelectorAll(".ant-select-item").length > 1
      ).toBeTruthy();
      const input = select.querySelector("input");
      await fireEvent.input(input, { target: { value: "b" } });
      expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(1);
      await fireEvent.input(input, { target: { value: "jj" } });
      expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(0);
    });

    test("backspace removes last selected item", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
      await fireEvent.click(select);
      // press escape
      await fireEvent.keyDown(document.body, {
        key: "Backspace",
        keyCode: 8,
        which: 8
      });
      await delay(300);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(1);
    });

    test("tag close icon removes option", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
      expect(select.innerHTML).toContain("anticon-close");
      await fireEvent.click(select.querySelector(".anticon-close"));
      await delay(300);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(1);
    });

    test("focus on input after item selected or deselected", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      const input = select.querySelector("input");
      await fireEvent.click(select);
      const dropdown = container.querySelector(".ant-select-dropdown");
      await fireEvent.click(dropdown.querySelector(".ant-select-item-option"));
      expect(input).toBe(document.activeElement);
    });

    test("single mode keyboard navigation and selection", async () => {
      // Should allow arrows to change active
      const { container, component } = render(SelectBasic);
      await delay(300);
      const select = container.querySelector(".ant-select");
      await fireEvent.click(select);
      const options = container.querySelectorAll(
        ".ant-select-dropdown .ant-select-item-option"
      );
      expect(options[1].className).toContain("ant-select-item-option-active");
      await fireEvent.keyDown(document.body, {
        key: "ArrowDown",
        keyCode: 40,
        which: 40
      });
      expect(options[2].className).toContain("ant-select-item-option-active");
      await fireEvent.keyDown(document.body, {
        key: "Enter",
        keyCode: 13,
        which: 13
      });
      await fireEvent.keyDown(document.body, {
        key: "ArrowUp",
        keyCode: 38,
        which: 38
      });
      await fireEvent.keyDown(document.body, {
        key: "ArrowUp",
        keyCode: 38,
        which: 38
      });
      expect(options[0].className).toContain("ant-select-item-option-active");
      expect(container.querySelector(".ant-select-dropdown-open")).toBeTruthy();
      expect(component.$$.ctx[0]).toEqual("lucy");
      await fireEvent.keyDown(document.body, {
        key: "Enter",
        keyCode: 13,
        which: 13
      });
      expect(container.querySelector(".ant-select-dropdown-open")).toBeFalsy();
      // Selected label should have changed
      expect(component.$$.ctx[0]).toEqual("jack");
    });

    test("multiple and tags mode keyboard navigation and selection", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      await fireEvent.click(select);
      const options = container.querySelectorAll(
        ".ant-select-dropdown .ant-select-item-option"
      );
      // Two items should be selected
      expect(options[0].className).toContain("ant-select-item-option-selected");
      expect(options[2].className).toContain("ant-select-item-option-selected");
      // remove both selected items with the enter key
      await fireEvent.keyDown(document.body, {
        key: "Enter",
        keyCode: 13,
        which: 13
      });
      await fireEvent.keyDown(document.body, {
        key: "ArrowDown",
        keyCode: 40,
        which: 40
      });
      await fireEvent.keyDown(document.body, {
        key: "ArrowDown",
        keyCode: 40,
        which: 40
      });
      await fireEvent.keyDown(document.body, {
        key: "Enter",
        keyCode: 13,
        which: 13
      });
      expect(
        container.querySelector(".ant-select-item-option-selected")
      ).toBeFalsy();
      // dropdown should still be open
      expect(container.querySelector(".ant-select-dropdown-open")).toBeTruthy();
      await fireEvent.keyDown(document.body, {
        key: "Enter",
        keyCode: 13,
        which: 13
      });
      expect(options[2].className).toContain("ant-select-item-option-selected");
    });
  });
});
