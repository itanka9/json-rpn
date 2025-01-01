# json-rpn

Example json encoding using reverse pollish notation. Not fully working for now - need to proper encoding for float numbers.

## Interface 

```ts
interface Encoded {
  data: ArrayBuffer;
  strings: string[];
}

export function encode (obj: any): Encoded;
export function decode ({ data, strings }: Encoded): any;
```

## Developement

Install dependencies

```
npm i
```

Build 

```
npm run build
```

Run tests

```
npm test
```

## Licence

This is public domain software.