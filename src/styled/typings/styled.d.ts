import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        navColor: string,
        backgroundColor: string;
        elementsBackgroundColor: string;
        elementsBorder: string;
        TextColorMain: string,
        TextColorSecondary: string;
        LinkColor: string
    }
}