import { Client } from '../typesClient/Client';
import { ClientForm } from '../typesClient/ClientForm';
import { HOST_API, TOKEN_API } from '../config';
import { alertCreate } from '../utils/alert';

export async function requestClient(
  body: ClientForm,
): Promise<Client | undefined> {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${TOKEN_API}`);
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
    redirect: 'follow',
  };
  try {
    console.log(body);
    const requestFetch = await fetch(`${HOST_API}`, requestOptions);
    const result = await requestFetch.json();

    if (result && result?.type === 'Application error') {
      alertCreate(result.message);
    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      alertCreate(error?.message);
    }
    return undefined;
  }
}
