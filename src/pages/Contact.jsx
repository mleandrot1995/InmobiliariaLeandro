
export default function Contact() {
  return (
    <div>
      <h1>Página de Contacto</h1>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="tu@email.com" />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea placeholder="Escribí tu mensaje..."></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
