export declare type Color = 'white' | 'black';
export declare type Role = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export declare type Key = 'a0' | 'a1' | 'b1' | 'c1' | 'd1' | 'e1' | 'f1' | 'g1' | 'h1' | 'a2' | 'b2' | 'c2' | 'd2' | 'e2' | 'f2' | 'g2' | 'h2' | 'a3' | 'b3' | 'c3' | 'd3' | 'e3' | 'f3' | 'g3' | 'h3' | 'a4' | 'b4' | 'c4' | 'd4' | 'e4' | 'f4' | 'g4' | 'h4' | 'a5' | 'b5' | 'c5' | 'd5' | 'e5' | 'f5' | 'g5' | 'h5' | 'a6' | 'b6' | 'c6' | 'd6' | 'e6' | 'f6' | 'g6' | 'h6' | 'a7' | 'b7' | 'c7' | 'd7' | 'e7' | 'f7' | 'g7' | 'h7' | 'a8' | 'b8' | 'c8' | 'd8' | 'e8' | 'f8' | 'g8' | 'h8';
export declare type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export declare type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export declare type FEN = string;
export declare type Pos = [number, number];
export interface Piece {
    role: Role;
    color: Color;
    promoted?: boolean;
}
export interface Drop {
    role: Role;
    key: Key;
}
export interface Pieces {
    [key: string]: Piece;
}
export interface PiecesDiff {
    [key: string]: Piece | null;
}
export declare type KeyPair = [Key, Key];
export declare type NumberPair = [number, number];
export declare type NumberQuad = [number, number, number, number];
export interface Dests {
    [key: string]: Key[];
}
export interface MaterialDiffSide {
    [role: string]: number;
}
export interface MaterialDiff {
    white: MaterialDiffSide;
    black: MaterialDiffSide;
}
export interface Elements {
    board: HTMLElement;
    over?: HTMLElement;
    ghost?: HTMLElement;
    svg?: SVGElement;
}
export interface Dom {
    elements: Elements;
    bounds: Memo<ClientRect>;
    redraw: () => void;
    redrawNow: (skipSvg?: boolean) => void;
    unbind?: Unbind;
    destroyed?: boolean;
    relative?: boolean;
}
export interface Exploding {
    stage: number;
    keys: Key[];
}
export interface MoveMetadata {
    premove: boolean;
    ctrlKey?: boolean;
    holdTime?: number;
    captured?: Piece;
    predrop?: boolean;
}
export interface SetPremoveMetadata {
    ctrlKey?: boolean;
}
export declare type WindowEvent = 'onscroll' | 'onresize';
export declare type MouchEvent = MouseEvent & TouchEvent;
export interface KeyedNode extends HTMLElement {
    cgKey: Key;
}
export interface PieceNode extends KeyedNode {
    cgPiece: string;
    cgAnimating?: boolean;
    cgFading?: boolean;
    cgDragging?: boolean;
}
export interface SquareNode extends KeyedNode {
}
export interface Memo<A> {
    (): A;
    clear: () => void;
}
export interface Timer {
    start: () => void;
    cancel: () => void;
    stop: () => number;
}
export declare type Redraw = () => void;
export declare type Unbind = () => void;
export declare type Timestamp = number;
export declare type Milliseconds = number;
export declare type KHz = number;
export declare const files: File[];
export declare const ranks: Rank[];
