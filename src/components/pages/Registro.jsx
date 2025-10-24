import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../../pages/Registro"; 
import { BrowserRouter as Router } from "react-router-dom"; 
import React from "react";


beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => JSON.stringify([])); 
  Storage.prototype.setItem = jest.fn();
});


describe("Register component", () => {

  it("muestra un error si los campos no están completos", async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

 
    const submitButton = screen.getByText("Registrarse");
    
    
    fireEvent.click(submitButton);


    expect(await screen.findByText("Por favor completa todos los campos")).toBeInTheDocument();
  });

  it("muestra un error si las contraseñas no coinciden", async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    fireEvent.change(screen.getByLabelText("Nombre de usuario"), { target: { value: "usuario" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "usuario@mail.com" } });
    fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: "contraseña123" } });
    fireEvent.change(screen.getByLabelText("Confirmar contraseña"), { target: { value: "contraseña456" } });

    fireEvent.click(screen.getByText("Registrarse"));


    expect(await screen.findByText("Las contraseñas no coinciden")).toBeInTheDocument();
  });

  it("muestra un error si el email ya está registrado", async () => {

    Storage.prototype.getItem = jest.fn(() => JSON.stringify([{ email: "usuario@mail.com", username: "usuario", password: "contraseña123" }]));

    render(
      <Router>
        <Register />
      </Router>
    );

  
    fireEvent.change(screen.getByLabelText("Nombre de usuario"), { target: { value: "usuario2" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "usuario@mail.com" } });
    fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: "contraseña123" } });
    fireEvent.change(screen.getByLabelText("Confirmar contraseña"), { target: { value: "contraseña123" } });


    fireEvent.click(screen.getByText("Registrarse"));

    expect(await screen.findByText("Este correo ya está registrado")).toBeInTheDocument();
  });

  it("registra correctamente un nuevo usuario y redirige", async () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    fireEvent.change(screen.getByLabelText("Nombre de usuario"), { target: { value: "usuario" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "usuario@mail.com" } });
    fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: "contraseña123" } });
    fireEvent.change(screen.getByLabelText("Confirmar contraseña"), { target: { value: "contraseña123" } });

    fireEvent.click(screen.getByText("Registrarse"));

    await waitFor(() => expect(screen.getByText("¡Registro exitoso! Redirigiendo...")).toBeInTheDocument());

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "users",
      JSON.stringify([{ username: "usuario", email: "usuario@mail.com", password: "contraseña123" }])
    );

    await waitFor(() => expect(window.location.pathname).toBe("/login"));
  });
});
