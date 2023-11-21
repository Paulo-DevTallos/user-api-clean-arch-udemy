import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';
import * as classValidator from 'class-validator';

class ClassValidatorFieldsStub extends ClassValidatorFields<{
  field: string;
}> {}

describe('Validators unit tests', () => {
  it('should initialize errors and validatedData with null', () => {
    const sut = new ClassValidatorFieldsStub();
    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('should validate if errors', () => {
    const spyValidate = jest.spyOn(classValidator, 'validateSync');
    spyValidate.mockReturnValueOnce([
      { property: 'field', constraints: { isRequired: 'test error' } },
    ]);
    const sut = new ClassValidatorFieldsStub();
    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidate).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });
});
