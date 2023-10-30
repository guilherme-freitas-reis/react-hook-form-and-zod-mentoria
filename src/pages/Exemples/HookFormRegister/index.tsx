import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  surname: string;
  email: string;
};

function HookFormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // Importante: o hook useForm não renderiza o componente toda vez que o estado é alterado
  // É possível reaproveitar o código
  // Independe da quantidade de campos, o código não fica verboso

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>React Hook Form - Register</h2>

      <input placeholder="Nome" {...register("name", { required: true })} />
      {errors.name && <span>O campo nome é obrigatório</span>}

      <input
        placeholder="Sobrenome"
        {...register("surname", { required: true })}
      />
      {errors.surname && <span>O campo sobrenome é obrigatório</span>}

      <input placeholder="E-mail" {...register("email", { required: true })} />
      {errors.email && <span>O campo e-mail é obrigatório</span>}

      <input type="submit" />

      <Link to={"/"}>Voltar</Link>
    </form>
  );
}

export default HookFormRegister;
