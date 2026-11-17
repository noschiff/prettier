class Box {
  value!: number;
  #secret!: string;
  readonly fixed!: number;
  +covariant!: number;
  -contravariant!: number;
  [computed]!: number;
  'quoted'!: number;
  42!: number;
  static!: number;
  get!: number;
  declare!: number;
  /* before */ commented /* name */ ! /* bang */ : number;
  veryLongFieldNameThatGoesOnAndOn!: Map<string, Array<{key: string, value: number}>>;
}

class Derived extends Box {
  override value!: number;
}
