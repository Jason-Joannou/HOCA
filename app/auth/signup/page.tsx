import SignUpForm from '@/app/components/auth/SignUpForm';

export default function SignUp() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Sign Up for HOCA</h1>
      <SignUpForm />
    </div>
  );
}