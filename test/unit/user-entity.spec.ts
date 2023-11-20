import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';

const makeSut = () => {
  const userProps: UserProps = {
    name: 'any_name',
    email: 'any_email@example.com',
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

  it('should test created_at is an instance of Date', () => {
    expect(sut.props.created_at).toBeInstanceOf(Date);
  });

  it('should test all fields receive type data as defined', () => {
    const user = {
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      created_at: expect.any(Date),
    };
    expect(sut.props).toMatchObject(user);
  });

  it('should test all fields receive data as defined', () => {
    const user = {
      name: 'any_name',
      email: 'any_email@example.com',
      password: 'any_password',
    };
    expect(sut.props.name).toEqual(user.name);
    expect(sut.props.email).toEqual(user.email);
    expect(sut.props.password).toEqual(user.password);
  });
});
