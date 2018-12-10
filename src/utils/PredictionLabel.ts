export default interface PredictionLabel {
  code: string;
  codeDescription: string;
  kgram: Array<string>; 
  idx?: number;
  highlighted?: boolean;
}