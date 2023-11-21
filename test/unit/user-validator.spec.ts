import { UserDataBuilder } from '@/users/domain/testable/helpers/user.databuilder';
import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '@/users/domain/validators/user.validator';

describe('User validator unit tests', () => {
  let sut: UserValidator;

  beforeEach(() => {
    sut = UserValidatorFactory.createValidation();
  });

  describe('Name field', () => {
    it('should test invalidation cases for name field', () => {
      const isValid = sut.validate(null as any); // any para não dar erro de tipagem
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);
    });

    it('should test invalide cases for name field empty', () => {
      sut.validate({
        ...UserDataBuilder({}),
        name: '' as any,
      }); // any para não dar erro de tipagem
      expect(sut.errors['name']).toStrictEqual(['name should not be empty']);
    });

    it('should test invalide cases for name field is incorrect typeof', () => {
      sut.validate({
        ...UserDataBuilder({}),
        name: 30 as any,
      }); // any para não dar erro de tipagem
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);
    });

    it('should test invalide cases for name field is incorrect typeof', () => {
      const moreThan255 = 'Paulo'.repeat(256);
      sut.validate({
        ...UserDataBuilder({}),
        name: moreThan255 as any,
      }); // any para não dar erro de tipagem
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ]);
    });

    it('should test valide cases for name field', () => {
      const props = UserDataBuilder({});
      const isValid = sut.validate(props);
      expect(isValid).toBeTruthy();
      expect(sut.validatedData).toStrictEqual(new UserRules(props));
    });
  });
});
