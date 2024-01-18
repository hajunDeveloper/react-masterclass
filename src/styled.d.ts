import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme {
        red: string;
        black: {
            veryDark: string;
            drker: string;
            lighter:string
        };
        white: {
            darker: string;
            lighter: string;
        };
    }
}