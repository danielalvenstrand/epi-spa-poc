function hierarchyTracked(target: new (...args: any[]) => object, description?: Object) {
  for (const proto of Array.from(walkPrototypeChain(target))) {
    if (!Object.hasOwnProperty.call(proto, 'extendedBy')) {
      const extendedBy: typeof Function.extendedBy = [];
      Object.defineProperty(proto, 'extendedBy', {
        get: () => extendedBy
      });
    }

    target['description'] = description;

    // ! is used to suppress a strictNullChecks error on optional.
    // This is OK since we know it is now defined.
    (<any>proto).extendedBy!.push(target);
  }
}

declare global {
  interface Function {
    // Declared as optional because not all classes are extended.
    extendedBy?: Array<new (...args: any[]) => object>;
  }
}

function* walkPrototypeChain(target: new (...args: any[]) => object) {
  let proto = Reflect.getPrototypeOf(target);
  while (proto && proto !== Object) {
    yield proto;
    proto = Reflect.getPrototypeOf(proto);
  }
}

/** Every block component sets the BlockDescription through the decorator. */
export interface BlockDescription {

  /** Identifies the block component as an Episerver block. */
  blockIdentifier: string;
}

/**
 * The BlockDecorator describes a component as a block component.
 * @param description the description of the block, e.g. identifier.
 */
export function BlockDecorator(description: BlockDescription) {
  return (target: new (...args: any[]) => object) => hierarchyTracked(target, description);
}
