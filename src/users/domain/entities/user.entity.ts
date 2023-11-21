import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    UserEntity.validateFields(props);
    super(props, id);
    this.props.created_at = this.props.created_at ?? new Date();
  }

  static validateFields(props: UserProps) {
    const validator = UserValidatorFactory.createValidation();
    validator.validate(props);
  }

  update(value: string) {
    // valida tudo o que está nas props da instancia mais o valor que é repassado
    UserEntity.validateFields({ ...this.props, name: value });
    this.name = value;
  }

  updatePassword(value: string) {
    UserEntity.validateFields({ ...this.props, password: value });
    this.password = value;
  }

  get name(): string {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get createdAt() {
    return this.props.created_at;
  }
}
