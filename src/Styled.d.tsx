import "styled-components"; // ✨ 1

declare module "styled-components" { // ✨ 1
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}