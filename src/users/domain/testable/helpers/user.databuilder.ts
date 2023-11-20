import { UserProps } from '../../entities/user.entity';

type Props = Partial<UserProps>;

export const UserDataBuilder = (props: Props): UserProps => {
  return {
    name: props.name ?? 'any_name',
    email: props.email ?? 'any_email@example.com',
    password: props.password ?? 'any_password',
    created_at: props.created_at ?? new Date(),
  };
};
