export type FieldsError = {
  [field: string]: string[];
};

export interface ValidateFields<ValidatedProps> {
  errors: FieldsError;
  validatedData: ValidatedProps;
  validate(data: any): boolean;
}
