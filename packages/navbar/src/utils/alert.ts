import { toast } from 'react-toastify';

export function alertCreate(message: string) {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}
