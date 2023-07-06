export type Countries = Country[]

export interface Country{
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

interface CapitalInfo {
  latlng?: number[];
}

interface Car {
  signs?: string[];
  side:   Side;
}

enum Side {
  Left = "left",
  Right = "right",
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

interface Currencies {
  JOD?: Aed;
  USD?: Aed;
  RSD?: Aed;
  EUR?: Aed;
  BMD?: Aed;
  BOB?: Aed;
  LYD?: Aed;
  XOF?: Aed;
  AMD?: Aed;
  MUR?: Aed;
  MVR?: Aed;
  MKD?: Aed;
  ETB?: Aed;
  DKK?: Aed;
  IQD?: Aed;
  GTQ?: Aed;
  TTD?: Aed;
  PEN?: Aed;
  SRD?: Aed;
  SEK?: Aed;
  XPF?: Aed;
  FKP?: Aed;
  ZWL?: Aed;
  SAR?: Aed;
  AED?: Aed;
  AFN?: Aed;
  XAF?: Aed;
  PAB?: Aed;
  SYP?: Aed;
  VUV?: Aed;
  HNL?: Aed;
  AUD?: Aed;
  KID?: Aed;
  CLP?: Aed;
  XCD?: Aed;
  MXN?: Aed;
  CNY?: Aed;
  SSP?: Aed;
  SZL?: Aed;
  ZAR?: Aed;
  UZS?: Aed;
  IDR?: Aed;
  PYG?: Aed;
  PLN?: Aed;
  BAM?: BAM;
  CAD?: Aed;
  BRL?: Aed;
  MRU?: Aed;
  ILS?: Aed;
  ANG?: Aed;
  BND?: Aed;
  SGD?: Aed;
  AOA?: Aed;
  BYN?: Aed;
  TRY?: Aed;
  GIP?: Aed;
  BTN?: Aed;
  INR?: Aed;
  VES?: Aed;
  QAR?: Aed;
  CZK?: Aed;
  KWD?: Aed;
  NZD?: Aed;
  JMD?: Aed;
  KYD?: Aed;
  PKR?: Aed;
  KZT?: Aed;
  BHD?: Aed;
  FJD?: Aed;
  ISK?: Aed;
  MMK?: Aed;
  BDT?: Aed;
  PHP?: Aed;
  NPR?: Aed;
  YER?: Aed;
  KRW?: Aed;
  OMR?: Aed;
  ERN?: Aed;
  IRR?: Aed;
  TZS?: Aed;
  SBD?: Aed;
  KES?: Aed;
  DOP?: Aed;
  GBP?: Aed;
  GGP?: Aed;
  RWF?: Aed;
  TVD?: Aed;
  TWD?: Aed;
  GYD?: Aed;
  SCR?: Aed;
  KPW?: Aed;
  BWP?: Aed;
  KHR?: Aed;
  BBD?: Aed;
  COP?: Aed;
  UAH?: Aed;
  NAD?: Aed;
  TOP?: Aed;
  ARS?: Aed;
  CRC?: Aed;
  GHS?: Aed;
  SHP?: Aed;
  EGP?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  HUF?: Aed;
  BZD?: Aed;
  BSD?: Aed;
  AWG?: Aed;
  STN?: Aed;
  RUB?: Aed;
  FOK?: Aed;
  NIO?: Aed;
  TND?: Aed;
  CDF?: Aed;
  NOK?: Aed;
  SLL?: Aed;
  LSL?: Aed;
  DJF?: Aed;
  LKR?: Aed;
  WST?: Aed;
  TMT?: Aed;
  MDL?: Aed;
  CHF?: Aed;
  MWK?: Aed;
  LBP?: Aed;
  MNT?: Aed;
  THB?: Aed;
  NGN?: Aed;
  CVE?: Aed;
  JEP?: Aed;
  DZD?: Aed;
  LAK?: Aed;
  AZN?: Aed;
  MAD?: Aed;
  BGN?: Aed;
  BIF?: Aed;
  UGX?: Aed;
  MZN?: Aed;
  GEL?: Aed;
  RON?: Aed;
  VND?: Aed;
  JPY?: Aed;
  LRD?: Aed;
  HTG?: Aed;
  PGK?: Aed;
  HKD?: Aed;
  KGS?: Aed;
  MGA?: Aed;
  GMD?: Aed;
  MYR?: Aed;
  SOS?: Aed;
  MOP?: Aed;
  ALL?: Aed;
  ZMW?: Aed;
  CKD?: Aed;
  GNF?: Aed;
  KMF?: Aed;
  IMP?: Aed;
  SDG?: BAM;
  TJS?: Aed;
  UYU?: Aed;
}

interface Aed {
  name:   string;
  symbol: string;
}

interface BAM {
  name: string;
}

interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

interface Idd {
  root?:     string;
  suffixes?: string[];
}

interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

interface Translation {
  official: string;
  common:   string;
}

interface PostalCode {
  format: string;
  regex?: string;
}

enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
