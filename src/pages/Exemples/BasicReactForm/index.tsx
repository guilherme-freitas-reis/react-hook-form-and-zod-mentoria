import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

function BasicReactForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Quanto mais campos, mais verboso fica o código
  // Renderiza o componente toda vez que o estado é alterado
  // Não é possível reaproveitar o código

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      surname,
      email,
      age,
    };

    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Basic Form React</h2>

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Sobrenome"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Idade"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input type="submit" />

      <Link to={"/"}>Voltar</Link>
    </form>
  );
}

export default BasicReactForm;
