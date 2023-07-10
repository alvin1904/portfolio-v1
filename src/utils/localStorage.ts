export function getFromLS(key: string): any | null {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
    }
    return null;
  }
  
  export function sendToLS(key: string, value: any): void {
    if (typeof window !== "undefined") {
      const temp = JSON.stringify(value);
      localStorage.setItem(key, temp);
    }
  }
  