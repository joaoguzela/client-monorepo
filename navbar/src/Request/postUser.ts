export function request(body: any) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer guzela');
  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
    redirect: 'follow',
  };

  return fetch('http://localhost:3333/clients', requestOptions);
}
