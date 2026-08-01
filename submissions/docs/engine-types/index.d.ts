export interface EaseMotionOptions { 
    autoObserve?: boolean; 
    reducedMotionFallback?: boolean; 
    prefix?: string; 
} 

export interface ParseResult { 
    animation: string; 
    duration?: string; 
    delay?: string; 
    easing?: string; 
    iteration?: string; 
} 

export declare class EaseMotionEngine { 
    constructor(options?: EaseMotionOptions); 
    init(): void; 
    parse(dslString: string): ParseResult; 
    compile(dslString: string): string; 
    optimize(cssString: string): string; 
} 

declare const EaseMotion: EaseMotionEngine; 
export default EaseMotion;
