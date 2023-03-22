import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("<GifItem /> tests", () => {
  const testTitle = "Testing title for GifItem";
  const testSrc = "https://testingsrc.com/";

  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={testTitle} src={testSrc} />);
    expect(container).toMatchSnapshot();
  });

  test("should show img with url and alt", () => {
    render(<GifItem title={testTitle} src={testSrc} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(testSrc);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(testSrc);
    expect(alt).toBe(testTitle);
  });

  test("should show title", () => {
    render(<GifItem title={testTitle} src={testSrc} />);
    expect(screen.getByText(testTitle)).toBeTruthy;
  });
});
