import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("<Add Category /> tests", () => {
  const testValue = "Cortana";

  test("should change the value in text box", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: testValue } });

    expect(input.value).toBe(testValue);
  });

  test("should call onAddCategory if the input has a value", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: testValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledWith(testValue);
  });

  test("should not call onNewCategory if input value is empty", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
