"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Testimonial 1",
    avatar: "T",
    title: "CEO",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Testimonial 2",
    avatar: "T",
    title: "CEO",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    name: "Testimonial 3",
    avatar: "T",
    title: "CEO",
    description: "ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    name: "Testimonial 4",
    avatar: "T",
    title: "CEO",
    description: "r in reprehenderit in voluptate velit esse cillum dolore",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}