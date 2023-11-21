import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { UserDataBuilder } from '@/users/domain/testable/helpers/user.databuilder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
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

  it('should test name setter for name field', () => {
    sut['name'] = 'Paulo Sergio';
    expect(sut.props.name).toEqual('Paulo Sergio');
    expect(typeof sut.props.name).toEqual('string');
  });

  it('should test email getter returns email', () => {
    const getEmail = sut.email;
    expect(getEmail).toBeDefined();
    expect(getEmail).toEqual(sut.props.email);
    expect(typeof getEmail).toBe('string');
  });

  it('should test password getter returns password', () => {
    const getPassword = sut.password;
    expect(getPassword).toBeDefined();
    expect(getPassword).toEqual(sut.props.password);
    expect(typeof getPassword).toBe('string');
  });

  it('should test password setter for password field', () => {
    sut['password'] = '123456';
    expect(sut.props.password).toEqual('123456');
    expect(typeof sut.props.password).toEqual('string');
  });

  it('should test created_at getter returns created_at', () => {
    const getCreatedAt = sut.createdAt;
    expect(getCreatedAt).toBeDefined();
    expect(getCreatedAt).toBeInstanceOf(Date);
  });

  it('should test update method', () => {
    sut.update('other name');
    expect(sut.props.name).toEqual('other name');
  });

  it('should test updatePassword method', () => {
    const newPass = '123!@#456$%¨789&*(';
    sut.updatePassword(newPass);
    expect(sut.props.password).toEqual(newPass);
  });
});
