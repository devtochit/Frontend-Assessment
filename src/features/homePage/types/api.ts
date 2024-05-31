export type Phone = {
  id: string;
  name: string;
  data: {
    [key: string]: string | undefined | null;
  };
  // data: {
  //   color?: string;
  //   capacityGB?: string;
  //   cpumodel?: string;
  //   harddisksize?: string;
  //   year?: string;
  //   price?: string;
  //   casesize?: string;
  //  Strap Colour?: string;
  //   screensize?: string;
  //   generation?: string;
  // } | null;
};
export type Phones = Phone[];
