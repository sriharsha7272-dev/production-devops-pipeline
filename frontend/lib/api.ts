export async function getMessage() {
  return new Promise<{ message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ message: "Mock backend response" });
    }, 500);
  });
}
