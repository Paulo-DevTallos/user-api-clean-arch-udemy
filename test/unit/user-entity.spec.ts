import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: 'any_name',
      email: 'any_email@example.com',
      password: 'any_password',
    };
    sut = new UserEntity(props);
  });

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

  it('should test name getter returns name', () => {
    const getName = sut.name;
    expect(getName).toBeDefined();
    expect(getName).toEqual(sut.props.name);
    expect(typeof getName).toBe('string');
  });
});
