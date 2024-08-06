import { nanoid } from "nanoid";

export default function requestIdGen(){
    const numericAlphabet = '0123456789';
// Generate a numeric-only ID with a custom length
    const numericId = nanoid(10, numericAlphabet); 
    return "REQ-" +numericId.toString();
}