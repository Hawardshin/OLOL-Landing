import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const API_URL = import.meta.env.VITE_API_URL; // .env 파일에 VITE_API_URL 설정

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/emails/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      const result = await response.text();

      if (response.ok) {
        setMessage(`예약되었습니다: ${result}`);
      } else {
        switch (response.status) {
          case 400:
            setMessage("잘못된 이메일 형식입니다. 다시 시도해주세요.");
            break;
          case 409:
            setMessage("이미 구독된 이메일입니다.");
            break;
          default:
            setMessage("오류가 발생했습니다. 다시 시도해주세요.");
        }
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setMessage("서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            올랑 올랑을{" "}
          </span>
          사전 예약하세요
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          어플리케이션 출시 소식을 가장 먼저 메일로 받아보세요.
        </p>
        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <Button type="submit">Subscribe</Button>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
