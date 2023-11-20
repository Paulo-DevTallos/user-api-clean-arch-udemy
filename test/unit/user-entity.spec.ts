import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';

const makeSut = () => {
  const userProps: UserProps = {
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
  };
  const sut = new UserEntity(userProps);
  return sut;
};

describe('UserEntity unit tests', () => {
  const sut = makeSut();

  it('should test constructor method is defined', () => {
    expect(sut.props).toBeDefined();
  });
});
