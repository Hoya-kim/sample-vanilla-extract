# TODO

## 1. 기본 사용

logo 클래스를 스타일로 변환해보자

```ts
// test.css.ts
import { style } from '@vanilla-extract/css';

export const logoStyle = style({
  height: '6em',
  // ...
  // marginTop: 25, // 25px로 캐스팅하여 계산됨
});
```

```tsx
// Test.tsx
import { logoStyle } from './styles/logo.css';

const Test = () => {
  return <img className='logoStyle' />;
};
```

## 2. css 변수 사용

텍스트에 사용할 색상 변수로 만들어보자

```ts
// test.css.ts
import { style } from '@vanilla-extract/css';

export const colorVar = createVar();

export const blue = style({
  vars: {
    [colorVar]: 'blue',
  },
  color: colorVar,
});
```

## 3. 스타일 합성

스타일 합성도 가능

```ts
// test.css.ts
const base = style({ padding: 12 });

// base의 className이 합쳐져서 나옴
const secondary = style([base, { background: 'aqua' }]);
```

## 4. 테마 만들기

```ts
export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
  },
  font: {
    body: 'arial',
  },
});

export const brandText = style({
  color: vars.color.brand,
  font: vars.font.body,
});
```

```tsx
<div className={themeClass}>
  <div className={brandText}>안녕하세요</div>
</div>
```

## 5. Sprinkles

Atomic CSS를 쉽게 구현할 수 있는 도구

## 6. Receipes

variant기반으로 컴포넌트 스타일링
