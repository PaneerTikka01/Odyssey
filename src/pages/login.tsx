// pages/login.tsx
import LoginForm from "@/components/LoginForm";

const BG = "https://cdn.pixabay.com/video/2018/10/25/18903-297379476.mp4";


export default function LoginPage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={BG}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-20 h-full flex items-center justify-center">
        <LoginForm />
      </div>
    </section>
  );
}
