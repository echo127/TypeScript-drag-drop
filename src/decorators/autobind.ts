//autobind decorator
export function Autobind(
  _target: any,
  _mehtodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMehtod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMehtod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}
