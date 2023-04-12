interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p style={{ color: 'red', marginLeft: '20px', fontSize: '18px' }}>{error}</p>;
}
