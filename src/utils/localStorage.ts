export function getFromLS(key: string): any | null {
  try {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

export function sendToLS(key: string, value: any): void {
  try {
    if (typeof window !== "undefined") {
      const temp = JSON.stringify(value);
      localStorage.setItem(key, temp);
    }
  } catch (e) {
    console.error(e);
  }
}
