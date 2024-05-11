import { ErrorPage } from '@containers';

export function requireAuth(Component: any) {
  const test = true;
  if (test) {
    return <ErrorPage />;
  }

  return (
    <div className='require-container'>
      <div className='test'>Hello</div>
      <Component />
    </div>
  );
}
