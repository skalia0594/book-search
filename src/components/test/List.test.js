import React from "react"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import List from '../List'


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
  const docs= [
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
  act(() => {
    render(<List matchedRecord={docs} />, container)
  })
  expect(container.innerHTML).toMatchSnapshot()
})
