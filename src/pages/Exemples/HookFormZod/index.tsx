import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    firstName: z.string().nonempty({ message: "Nome é obrigatório" }),
    age: z.coerce
      .number({
        required_error: "Idade é obrigatória",
        invalid_type_error: "Idade deve ser um número",
      })
      .positive({ message: "Idade deve ser maior que zero" })
      .int({ message: "Idade deve ser um número inteiro" })
      .min(18, { message: "Idade inválida" }),
  })
  .required();

type FormData = z.infer<typeof schema>;

// Gera a tipagem automaticamente com base no schema
// Inúmeras possibilidades de validação
// Permite customizar as mensagens de erro
// Permite customizar o tipo de dado de entrada
// Permite customizar o tipo de dado de saída

function HookFormZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>React Hook Form + Zod</h2>

      <input placeholder="Nome" {...register("firstName")} />
      <span>{errors.firstName?.message}</span>

      <input placeholder="Idade" {...register("age")} />
      <span>{errors.age?.message}</span>

      <input type="submit" />
    </form>
  );
}

export default HookFormZod;
