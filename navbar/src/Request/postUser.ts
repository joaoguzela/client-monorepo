import { Client } from '../@types/Client';
import { ClientForm } from '../@types/ClientForm';
import { alertCreate } from '../utils/alert';

export async function requestClient(
  body: ClientForm,
): Promise<Client | undefined> {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer guzela');
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
    redirect: 'follow',
  };
  try {
    const requestFetch = await fetch(
      'http://localhost:3333/clients',
      requestOptions,
    );
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
