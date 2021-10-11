export interface IAction {
  type: string;
  [key: string]: any;
}

export type IState = { [key: string]: any };