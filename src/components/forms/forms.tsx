import { useForm } from "react-hook-form";

type FormData = {
  UserName: string;
};

export default function Forms() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <div className="flex flex-col my-60 items-center justify-self-center">
      <form className="flex flex-col text-center" onSubmit={onSubmit}>
        <label>UserName</label>
        <input {...register("UserName")} />
        <input
          className="flex-1 bg-blue-600 hover:bg-green-600 m-4"
          type="submit"
        />
      </form>
    </div>
  );
}
