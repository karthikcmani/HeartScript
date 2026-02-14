export interface LoveAlgorithmResult {
  score: number;              // Final compatibility score (0 - 100)
  explanation: string;        // Human-readable explanation
  timeComplexity: string;     // Big-O time complexity
  spaceComplexity: string;    // Big-O space complexity
}
