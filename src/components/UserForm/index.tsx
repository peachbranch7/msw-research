import { FC } from 'react';
import { TextInput } from '../TextInput';

type Props = {
  name: string;
  age: number;
  onSubmit: () => Promise<void>;
  onChangeName: (value: string) => void;
  onChangeAge: (value: number) => void;
};

export const UserForm: FC<Props> = ({
  name,
  age,
  onSubmit,
  onChangeName,
  onChangeAge,
}: Props) => {
  return (
    <>
      <TextInput
        type={'text'}
        label={'名前'}
        value={name}
        onChange={onChangeName}
      />
      <TextInput
        type={'number'}
        label={'年齢'}
        value={age}
        onChange={onChangeAge}
      />
      <button onClick={onSubmit}>送信</button>
    </>
  );
};
