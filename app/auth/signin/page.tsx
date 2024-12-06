import SignInForm from '@/app/components/auth/SignInForm';

export default function SignIn() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Sign In to HOCA</h1>
      <SignInForm />
    </div>
  );
}