import { fireEvent, render, screen } from "@testing-library/react"
import Product from "../organisms/Product"  
import React from "react"

beforeEach(() => {

  Storage.prototype.getItem = jest.fn(() => JSON.stringify([]))
  Storage.prototype.setItem = jest.fn()
})

describe("Product component", () => {
  const mockProduct = {
    code: "1",
    image: "http://example.com/image1.png",
    description: "Oso Patriarcal",
    name: "Oso machista opresor",
    price: "15990",
  }

  it("se renderiza correctamente", () => {
    render(<Product {...mockProduct} />)
    expect(screen.getByText("Oso Patriarcal")).toBeInTheDocument()
    expect(screen.getByText("Oso machista opresor")).toBeInTheDocument()
    expect(screen.getByText("15990")).toBeInTheDocument()
  })

  it("llama correctamente al localStorage", () => {
    render(<Product {...mockProduct} />)
    const button = screen.getByText("Añadir al carro")
    fireEvent.click(button)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "products",
      JSON.stringify([mockProduct])
    )
  })
})
