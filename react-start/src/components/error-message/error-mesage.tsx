import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface ErrorMessageProps {
  error: FetchBaseQueryError | SerializedError;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  let textError = '';
  if (props.error) {
    if ('status' in props.error) {
      textError = 'error' in props.error ? props.error.error : JSON.stringify(props.error.data);
      if (textError == '{"error":"There is nothing here"}') {
        textError = 'OOPS! There is nothing here';
      }
    }
  }
  return <p style={{ color: 'red', marginLeft: '20px', fontSize: '18px' }}>{textError}</p>;
}
