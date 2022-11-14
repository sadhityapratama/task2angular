export interface Kontak {
  id: number;
  name: string;
  phone: string;
  skill: string;
  notes: string;
}

export class KontakModel {
  constructor(
    public name: string,
    public phone: string,
    public skill: string,
    public notes: string
  ){ }
}

// export class KontakModel {
//   constructor(
//     public firstName: string,
//     public lasstName: string,
//     public phone: string
//   ){ }
// }