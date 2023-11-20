import { Entity } from '@/shared/domain/entities/entity';
import { validate as uuidValidate } from 'uuid';

type StubProps = {
  prop1: string;
  prop2: number;
};

class EntityStub extends Entity<StubProps> {}

describe('abstract Entity class unit test', () => {
  it('should test props', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const entity = new EntityStub(props);
    expect(entity.props).toBeDefined();
    expect(entity.props).toStrictEqual(props);
    expect(entity.props.prop1).toStrictEqual('value1');
  });

  it('should test id prop is not null', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const entity = new EntityStub(props);
    expect(entity._id).not.toBeNull();
  });

  it('should test id prop is a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const id = 'a7fed46e-a844-4ddd-a998-1bfd1382a50f';
    const entity = new EntityStub(props, id);
    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(uuidValidate(id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('should convert a entity to a javaScript Object', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const id = 'a7fed46e-a844-4ddd-a998-1bfd1382a50f';
    const entity = new EntityStub(props, id);
    expect(entity.toJSON()).toStrictEqual({ id, ...props });
  });
});
