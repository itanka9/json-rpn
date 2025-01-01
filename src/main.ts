/**
 * Simple JSON encoder/decoder via reverse pollish notation.
 */
enum OPERATORS {
  NUMBER = 1,
  STRING = 2,
  NULL = 3,
  BOOLEAN = 4,
  ARRAY = 5,
  OBJECT = 6,
  UNDEFINED = 7,
}

interface Encoded {
  data: ArrayBuffer;
  strings: string[];
}

export function encode (obj: any): Encoded {
  const stack: number[] = [];
  const stringIndexes: Record<string, number> = {};
  const strings: string[] = [];

  const indexateString = (str: string) => {
    const known = stringIndexes[str];
      if (!known) {
        const index = strings.length;
        stringIndexes[str] = index;
        strings.push(str);
        return index;
      } else {
        return known;
      }
  }

  function step (obj: any) {
    switch (typeof obj) {
      case 'object':
        if (obj === null) {
          stack.push(OPERATORS.NULL);
          break;
        }
        if (typeof obj[Symbol.iterator] === 'function') {
          stack.push(obj.length + 10);
          stack.push(OPERATORS.ARRAY);
          for (let i = 0; i < obj.length; i++) {
            step(obj[i]);
          }
        } else {
          stack.push(Object.keys(obj).length + 10);
          stack.push(OPERATORS.OBJECT);
          for (const key in obj) {
            step(obj[key]);
            step(key);
          }
        }
        break;

      case 'string':
        const str = String(obj);
        stack.push(10 + indexateString(str));
        stack.push(OPERATORS.STRING);
        break;
  
      case 'number':
        // FIXME: Properly encode all possible JS numbers
        // - float64, eg.
        stack.push(10 + Number(obj));
        stack.push(OPERATORS.NUMBER);
        break;
  
      case 'boolean':
        stack.push(10 + Number(obj));
        stack.push(OPERATORS.BOOLEAN);
        break;
      
      case 'undefined':
        stack.push(OPERATORS.UNDEFINED);
        break;
  
      default: 
        throw new Error(`Unsupported type ${typeof obj}: ${obj}`);
    }  
  }

  step(obj);

  console.log(stack, strings);

  return { data: new Uint32Array(stack).buffer, strings };
}

export function decode ({ data, strings }: Encoded) {
  const arr = Array.from(new Uint32Array(data));
  const stack: any[] = [];

  while (arr.length > 0) {
    const item = arr.pop();
    switch (item) {
      case OPERATORS.NULL:
        stack.push(null);
        break;

      case OPERATORS.UNDEFINED:
        stack.push(undefined);
        break;

      case OPERATORS.NUMBER:
        stack.push(Number(arr.pop()) - 10);
        break;

      case OPERATORS.BOOLEAN:
        stack.push(Boolean(Number(arr.pop()) - 10));
        break;

      case OPERATORS.STRING:
        const str = strings[Number(arr.pop()) - 10];
        stack.push(str);
        break;

      case OPERATORS.ARRAY:
        let len = Number(arr.pop()) - 10;
        const a = [];
        while (len > 0) {
          a.push(stack.pop());
          len--;
        }
        stack.push(a);
        break;

      case OPERATORS.OBJECT:
        const obj: any = {};
        let olen = Number(arr.pop()) - 10;
        while(olen > 0) {
          const value = stack.pop();
          const key = stack.pop();
          obj[key] = value;
          olen--;
          
        }
        stack.push(obj);
    }
  }

  console.log('stack', stack);
  return stack.pop();
}