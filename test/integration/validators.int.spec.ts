import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

class RulesStub {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

class ClassValidatorFieldsStub extends ClassValidatorFields<RulesStub> {
  validate(data: any): boolean {
    // validate recebe a instancia da classe que recebe os dados
    return super.validate(new RulesStub(data));
  }
}

describe('Validators integration tests', () => {
  it('should validate with errors', () => {
    const validator = new ClassValidatorFieldsStub();
    expect(validator.validate(null)).toBeFalsy();
    expect(validator.errors).toStrictEqual({
      name: [
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ],
      price: [
        'price should not be empty',
        'price must be a number conforming to the specified constraints',
      ],
    });
  });

  it('should validate with no errors', () => {
    const validator = new ClassValidatorFieldsStub();
    const data = { name: 'any_value', price: 10 };
    expect(validator.validate(data)).toBeTruthy();
    expect(validator.validatedData).toStrictEqual(new RulesStub(data));
  });
});
