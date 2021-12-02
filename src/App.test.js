import React from "react"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App'


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("should render a App", () => {
  act(() => {
    render(<App />, container)
  })
  expect(container.innerHTML).toMatchSnapshot()
})

it("Search Button click", async () => {

  act(() => {
    render(<App />, container)
  })
  // const input = document.querySelector("input")
  const button = document.querySelector("[data-testid=search]")
  expect(button.innerHTML).toBe("Search")

  const fakeData = {
    docs: [
      {
        "cover_i": 258027,
        "title": "The Lord of the Rings",
        "author_name": [
            "J. R. R. Tolkien"
        ],
        "first_publish_year": 1954,
        "key": "OL27448W",
      },
    ]
  }
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  )

  await act(async () => {
    button.dispatchEvent(new MouseEvent("click"))
  });
  expect(container.querySelector('input').value).toBe('')
  expect(container.querySelector('span').textContent).toBe('No Record Found')
  
})