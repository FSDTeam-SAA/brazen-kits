import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-brazen-dark">
      <div className="absolute inset-0 z-0 bg-brazen-overlay/10 " />

      {/* Top Left Ellipse - Blurry background light */}
      <div className="absolute z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] -top-[100px] -left-[60px] sm:-top-[120px] sm:-left-[70px] md:-top-[130px] md:-left-[80px] rounded-full bg-gradient-radial from-brazen-ellipse/50 via-brazen-ellipse/40 to-transparent blur-[100px] sm:blur-[120px] md:blur-[130px]" />

      {/* Bottom Right Ellipse - Blurry background light */}
      <div className="absolute z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] -bottom-[100px] -right-[60px] sm:-bottom-[120px] sm:-right-[70px] md:-bottom-[130px] md:-right-[80px] rounded-full bg-gradient-radial from-brazen-ellipse/50 via-brazen-ellipse/40 to-transparent blur-[100px] sm:blur-[120px] md:blur-[130px]" />

      <div className="relative z-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
          <div className="relative min-h-screen">
            <h1 className="text-white font-jockey font-normal text-128 leading-none tracking-normal text-center absolute lg:top-5 lg:left-10 xl:top-8 xl:left-16">
              BRAZEN
              <br />
              KITS
            </h1>
            <div className="lg:w-[300px] xl:w-[350px] lg:h-[430px] xl:h-[700px] absolute lg:top-[20%] lg:left-[45%] xl:top-[15%] xl:left-[40%]">
              <Image
                src="/crystal.png"
                alt="3D Crystal"
                width={400}
                height={700}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="transform scale-x-50 absolute bottom-4 right-0 z-30 text-white font-morganite font-semibold text-40 leading-none">
              M[x]
            </div>
          </div>

          <div className="flex items-center justify-center px-8">
            <div className="w-full max-w-lg">
              <h2 className="text-white text-center mb-8 font-jockey font-normal text-40 leading-none tracking-normal">
                License Your Music
              </h2>

              <form action={handleSubmit} className="space-y-10">
                <Input
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-none h-14 !text-xl border-0 bg-brazen-input text-gray-800 placeholder:text-gray-800 font-jockey font-normal shadow-brazen"
                />

                <Input
                  name="email"
                  placeholder="Email/Phone"
                  required
                  className="rounded-none h-14 !text-xl border-0 bg-brazen-input text-gray-800 placeholder:text-gray-800 font-jockey font-normal shadow-brazen"
                />

                <Textarea
                  name="message"
                  placeholder="Message: Let us know what tracks you have in mind and how best to reach you"
                  required
                  className="rounded-none min-h-40 !text-xl border-0 bg-brazen-input text-gray-800 placeholder:text-gray-800 font-jockey font-normal shadow-brazen resize-none"
                />

                <Button
                  type="submit"
                  className="rounded-none w-full h-12 text-lg bg-transparent hover:bg-white/10 text-white border border-white/50 font-jockey font-normal"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative min-h-[600px] md:min-h-screen px-6 py-8 mb-10">
            <h1 className="text-white font-jockey font-normal text-[90px] md:text-[100px] leading-none tracking-normal absolute top-8 left-6">
              BRAZEN
              <br />
              KITS
            </h1>
            <div className="w-[300px] md:w-[350px] h-[400px] md:h-[600px] absolute top-[30%] left-[50%] transform -translate-x-1/2 md:left-[50%]">
              <Image
                src="/crystal.png"
                alt="3D Crystal"
                width={350}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="transform scale-x-50 absolute bottom-4 right-4 z-30 text-white font-morganite font-bold text-[25px] leading-none tracking-normal">
              M[x]
            </div>
          </div>

          <div className="px-6 pb-8">
            <div className="w-full">
              <h2 className="text-white text-center mb-6 font-jockey font-normal text-3xl leading-none tracking-normal">
                License Your Music
              </h2>

              <form action={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-none h-12 text-base border-0 bg-brazen-input text-gray-800 placeholder:text-gray-800 font-jockey font-normal shadow-brazen"
                />

                <Input
                  name="email"
                  placeholder="Email/Phone"
                  required
                  className="rounded-none h-12 text-base border-0 bg-brazen-input text-gray-800 placeholder:text-gray-800 font-jockey font-normal shadow-brazen"
                />

                <Textarea
                  name="message"
                  placeholder="Message: Let us know what tracks you have in mind and how best to reach you"
                  required
                  className="rounded-none min-h-28 text-base border-0 bg-brazen-input text-gray-800 placeholder:text-gray-800 font-jockey font-normal shadow-brazen resize-none"
                />

                <Button
                  type="submit"
                  className="rounded-none w-full h-12 text-lg bg-transparent hover:bg-white/10 text-white border border-white/50 font-jockey font-normal"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
