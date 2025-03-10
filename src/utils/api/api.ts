interface IApiProps {
  url: string;
  body?: any;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

export async function api({ url, method, body }: IApiProps) {
  const response = await fetch(process.env.api + url, {
    body: body ? JSON.stringify(body) : null,
    headers: {
      "Content-Type": "application/json",
    },
    method: method,
  });

  return await response.json();
}
