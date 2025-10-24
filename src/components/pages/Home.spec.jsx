import { fireEvent, render, screen } from "@testing-library/react"
import Product from "../organisms/Product"
import React from "react"

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => JSON.stringify([]))
  Storage.prototype.setItem = jest.fn()
})

describe("Product component", () => {
  const mockProduct = {
    code: "LECHE001",
    name: "Leche Entera",
    price: "$1590 CLP",
    image:
      "https://thumbs.dreamstime.com/b/leche-de-granja-en-diferentes-platos-la-mesa-madera-naturaleza-desenfocada-el-fondo-167953475.jpg",
    description:
      "Directa del campo a tu mesa, nuestra leche es pura y natural. Con una textura cremosa y un sabor inigualable, cada vaso te da la energía y los nutrientes que necesitas para empezar bien el día",
  }

  it("se renderiza correctamente", () => {
    render(<Product {...mockProduct} />)
    expect(
      screen.getByText(
        "Directa del campo a tu mesa, nuestra leche es pura y natural. Con una textura cremosa y un sabor inigualable, cada vaso te da la energía y los nutrientes que necesitas para empezar bien el día"
      )
    ).toBeInTheDocument()
    expect(screen.getByText("Leche Entera")).toBeInTheDocument()
    expect(screen.getByText("$1590 CLP")).toBeInTheDocument()
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
